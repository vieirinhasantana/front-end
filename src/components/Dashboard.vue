<template>
  <div>
    <navbar></navbar>
    <div class="table-list-bug">
      <v-flex xs12 sm6 md10 offset-md1>
        <v-data-table :items="items" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.idBug }}</td>
          <td class="text-xs-center">{{ props.item.title }}</td>
          <td class="text-xs-center">{{ props.item.severity }}</td>
          <td class="text-xs-center">{{ props.item.email }}</td>
          <td class="text-xs-center">{{ props.item.timestamp | moment("D/M/YYYY H:mm:ss") }}</td>
          <td class="text-xs-center">
            <div v-if="props.item.status == 'aberto'"><v-chip color="green" small text-color="white">Aberto</v-chip></div>
            <div v-if="props.item.status == 'fechado'"><v-chip color="blue" small text-color="white">Pronto</v-chip></div>
          </td>
          <td class="text-xs-left">
            <v-tooltip top>
              <v-btn flat icon slot="activator" @click="viewBug(props.item.idBug)"><v-icon>remove_red_eye</v-icon></v-btn>
              <span>Visualizar</span>
            </v-tooltip>
            <v-tooltip top>
              <v-btn flat icon slot="activator" @click="updateBug(props.item.idBug)"><v-icon>done</v-icon></v-btn>
              <span>Finalizar</span>
            </v-tooltip>
          </td>
        </template>
        </v-data-table>
      </v-flex>
      <v-dialog v-model="dialog" width="500px">
        <v-card>
          <v-card-title class="headline">Sucesso :)</v-card-title>
          <v-card-text>Este bug foi marcado como resolvido!</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat="flat" class="button button_primary" @click.native="dialog = false">Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogEditBug" width="700px">
        <v-card>
          <v-card-title class="headline">Editar Bug - {{ data.idBug }}</v-card-title>
          <v-card-text>
            <v-layout row>
              <v-flex xs5>
                <v-text-field name="title" label="Título" v-model="data.title" disabled ></v-text-field>
              </v-flex>
              <v-flex xs1></v-flex>
              <v-flex xs5>
                <v-text-field name="severity" label="Severity" v-model="data.severity" disabled ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs5>
                <v-text-field name="email" label="Email" v-model="data.email" disabled ></v-text-field>
              </v-flex>
              <v-flex xs1></v-flex>
              <v-flex xs5>
                <v-text-field name="status" label="Status" v-model="data.status" disabled ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs11>
                <v-text-field name="description" label="Descrição" v-model="data.description" multi-line disabled ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs11>
                <div v-if="data.image != ''">
                <v-card>
                  <v-card-media :src="data.image" height="200px"></v-card-media>
                </v-card>
                </div>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat="flat" class="button button_primary" @click.native="dialogEditBug = false">Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
import { isLoggedIn } from '../utils/authentication'
import { getBug, updateBug } from '../utils/api'
import NavBar from './NavBar'

export default {
  data () {
    return {
      dialog: false,
      dialogEditBug: false,
      data: [],
      show: false,
      items: []
    }
  },
  mounted () {
    this.listAll()
  },
  methods: {
    listAll: function () {
      getBug(this.currentPage, this.currentSize).then(result => {
        this.items = result.data
      })
    },
    onPagination (paging) {
      this.currentPage = paging.page
      this.currentSize = paging.size
      this.listAll()
    },
    viewBug: function (id) {
      this.dialogEditBug = true
      getBug(id).then(result => {
        this.data = result.data[0]
        console.log(this.data)
      })
    },
    updateBug: function (id) {
      updateBug(id).then(result => {
        this.dialog = true
      })
    }
  },
  components: {
    navbar: NavBar
  },
  created: function () {
    isLoggedIn()
    .then(result => {
      console.log('Ok')
    })
    .catch(err => {
      if (err || err !== null) {
        this.$router.replace({
          path: '/sign-in'
        })
      }
    })
  }
}
</script>