<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card flat >
                <v-card-title>
                    <h3 class="headline mb-0">Cadatrar novo bug</h3>
                </v-card-title>
                <v-card-text>
                    <v-form v-model="valid" v-on:submit.prevent="add">
                        <p><b>ATENÇÃO: </b>Os campos que tiverem <b>*</b> são obrigatorios.</p>
                        <v-text-field label="Título Bug" v-model="nameBug" :rules="nameInput" required></v-text-field>
                        <v-select v-bind:items="items" v-model="e1" label="Severidade" :rules="severityInput" single-line bottom required></v-select>
                        <v-text-field v-model="description" label="Descrição" :rules="descriptionInput" multi-line required></v-text-field>
                        <v-text-field label="Email" type="email" v-model="email" :rules="emailInput" required></v-text-field>
                        <img :src="imageUrl" height="150" v-if="imageUrl"/>
                        <v-text-field label="Selecionar imagem" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
                        <input type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked">
                        <v-btn type="submit" class="button button_primary">Cadastrar</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
            <v-dialog v-model="dialog" width="500px">
              <v-card>
                <v-card-title class="headline">Oops! Algo errado aconteceu ;(</v-card-title>
                <v-card-text>Você preencheu os campos que são obrigatórios. Verifique e tente novamente!</v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat="flat" class="button button_primary" @click.native="dialog = false">Ok</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="dialogSuccess" width="500px">
              <v-card>
                <v-card-title class="headline">Sucesso :)</v-card-title>
                <v-card-text>Sua solicitação de bug foi enviada, dentre algumas horas iremos dar um parecer sobre a solução. Agradecemos por estar melhorando cada vez mais nosso sistema! </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat="flat" class="button button_primary" v-on:click ="resetForm">Ok</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
        </v-flex>
    </v-layout>
</template>
<script>
import { insertNewBug } from '../utils/api.js'

export default {
  $validates: true,
  data () {
    return {
      dialog: false,
      dialogSuccess: false,
      valid: false,
      nameBug: '',
      description: '',
      email: '',
      imageName: '',
      imageUrl: '',
      imageFile: '',
      e1: null,
      items: [
        { text: 'Baixo (Low)' },
        { text: 'Médio (Medium)' },
        { text: 'Alto (High)' },
        { text: 'Muito Alto (Very High)' }
      ],
      data: '',
      nameInput: [
        (v) => !!v || 'Nome do bug não informado!'
      ],
      severityInput: [
        (v) => !!v || 'Nível de severidade não informado!'
      ],
      descriptionInput: [
        (v) => !!v || 'Descrição do problema não informado!'
      ],
      emailInput: [
        (v) => !!v || 'Email não informado!'
      ]
    }
  },
  methods: {
    pickFile () {
      this.$refs.image.click()
    },
    onFilePicked (e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        this.imageName = files[0].name
        if (this.imageName.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.imageUrl = fr.result
          this.imageFile = files[0]
        })
      } else {
        this.imageName = ''
        this.imageFile = ''
        this.imageUrl = ''
      }
    },
    add: function () {
      if (this.nameBug === '' || this.severity === '' || this.description === '' || this.email === '') {
        this.dialog = true
      } else {
        this.data = JSON.stringify({
          'Title': this.nameBug,
          'Severity': this.e1.text,
          'Description': this.description,
          'Email': this.email,
          'Image': this.imageUrl,
          'Status': 'aberto'
        })
        insertNewBug(this.data)
        .then(result => {
          this.dialogSuccess = true
          console.log(result)
        })
        .catch(err => {
          if (err) {
            this.nameInput = ''
            this.severityInput = ''
            this.description = ''
            this.email = ''
            this.imageName = ''
            this.imageFile = ''
            this.imageUrl = ''
          }
        })
      }
    },
    resetForm: function (e) {
      this.dialogSuccess = false
      this.$router.go('/')
    }
  }
}
</script>
