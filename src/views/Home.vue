<template>
  <div class="home">
    <v-container class="poll-c">
      <v-row>
        <v-col md="12">
          <v-card>
            <v-card-text class="pt-2">
              <span class="text-c">
              {{ $t("intro1") }}
              <br/><br/>
                {{ $t("intro2") }}
              </span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="12">
          <v-card>
            <v-card-text class="pb-0 my-0">
              <span class="question-c">
                {{ $t("question1") }}
              </span>
            </v-card-text>
            <v-card-actions class="py-0 my-0 mx-2">
              <v-radio-group v-model="poll.question1">
                <v-radio :label="$t('question1a1')" value="a1" key="a1"></v-radio>
                <v-radio :label="$t('question1a2')" value="a2" key="a2"></v-radio>
              </v-radio-group>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="12">
          <v-card>
            <v-card-text class="pb-0 my-0">
              <span class="question-c">
                {{ $t("question2") }}
              </span>
            </v-card-text>
            <v-card-text class="py-0 my-0 mx-2">
              <v-checkbox v-model="poll.question2" :label="$t('question2a1')" value="a1" key="a1"></v-checkbox>
              <v-checkbox class="py-0 my-0" v-model="poll.question2" :label="$t('question2a2')" value="a2" key="a2"></v-checkbox>
              <v-checkbox class="py-0 my-0" v-model="poll.question2" :label="$t('question2a3')" value="a3" key="a3"></v-checkbox>
              <v-checkbox class="py-0 my-0" v-model="poll.question2" :label="$t('question2a4')" value="a4" key="a4"></v-checkbox>
              <v-checkbox class="py-0 my-0" v-model="poll.question2" :label="$t('question2a5')" value="a5" key="a5"></v-checkbox>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="12">
          <v-card>
            <v-card-text class="pb-0 my-0">
              <span class="question-c">
                {{ $t("question3") }}
              </span>
            </v-card-text>
            <v-card-actions class="py-0 my-0 mx-2">
              <v-radio-group v-model="poll.question3">
                <v-radio :label="$t('question3a1')" value="a1" key="a1"></v-radio>
                <v-radio :label="$t('question3a2')" value="a2" key="a2"></v-radio>
                <v-radio :label="$t('question3a3')" value="a3" key="a3"></v-radio>
              </v-radio-group>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="12">
          <v-card>
            <v-card-text class="pb-0 my-0">
              <span class="question-c">
                {{ $t("question4") }}
              </span>
            </v-card-text>
            <v-card-actions class="py-0 my-0 mx-2">
              <v-radio-group v-model="poll.question4">
                <v-radio :label="$t('question4a1')" value="a1" key="a1"></v-radio>
                <v-radio :label="$t('question4a2')" value="a2" key="a2"></v-radio>
                <v-radio :label="$t('question4a3')" value="a3" key="a3"></v-radio>
              </v-radio-group>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row v-if="poll.question4 == 'a1'">
        <v-col md="12">
          <v-card>
            <v-card-text class="pb-0 my-0">
              <span class="question-c">
                {{ $t("question5") }}
              </span>
            </v-card-text>
            <v-card-actions class="py-0 my-0 mx-2">
              <v-radio-group v-model="poll.question5">
                <v-radio :label="$t('question5a1')" value="a1" key="a1"></v-radio>
                <v-radio :label="$t('question5a2')" value="a2" key="a2"></v-radio>
                <v-radio :label="$t('question5a3')" value="a3" key="a3"></v-radio>
              </v-radio-group>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row v-if="poll.question4 == 'a1' || poll.question4 == 'a2'">
        <v-col md="12">
          <v-card>
            <v-card-text class="pb-0 my-0">
              <span class="question-c">
                {{ $t("question6") }}
              </span>
            </v-card-text>
            <v-card-actions class="py-0 my-0 mx-2">
              <v-radio-group v-model="poll.question6">
                <v-radio :label="$t('question6a1')" value="a1" key="a1"></v-radio>
                <v-radio :label="$t('question6a2')" value="a2" key="a2"></v-radio>
              </v-radio-group>
            </v-card-actions>
            <v-card-text>
              <h4>
                {{ $t("question6title") }}
              </h4>
              <span>
                {{ $t("question6info") }}
              </span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="12">
          <v-card>
            <v-card-text class="pb-0 my-0">
              <span class="question-c">
                {{ $t("question7") }}
              </span>
            </v-card-text>
            <v-card-actions class="py-0 my-0 mx-2">
              <v-radio-group v-model="poll.question7">
                <v-radio :label="$t('question7a1')" value="a1" key="a1"></v-radio>
                <v-radio :label="$t('question7a2')" value="a2" key="a2"></v-radio>
                <v-radio :label="$t('question7a3')" value="a3" key="a3"></v-radio>
              </v-radio-group>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="12">
          <v-card>
            <v-card-text class="pb-0 my-0">
              <span class="question-c">
                {{ $t("question8") }}
              </span>
            </v-card-text>
            <v-card-actions class="py-0 my-0 mx-2">
              <v-radio-group v-model="poll.question8">
                <v-radio :label="$t('question8a1')" value="a1" key="a1"></v-radio>
                <v-radio :label="$t('question8a2')" value="a2" key="a2"></v-radio>
                <v-radio :label="$t('question8a3')" value="a3" key="a3"></v-radio>
              </v-radio-group>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="12">
          <v-card>
            <v-card-text class="pb-0 my-0">
              <span class="question-c">
                {{ $t("comment") }}
              </span>
            </v-card-text>
            <v-card-actions class="py-0 my-0 mx-2">
              <v-textarea v-model="comment" :label="$t('formcomm')" :placeholder="$t('formcomm')"></v-textarea>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="12">
          <v-card>
            <v-card-text class="pb-0 my-0">
              <span class="question-c">
                {{ $t("outro1") }}
                <br/><br/>
                {{ $t("outro2") }}
                <br/><br/>
                {{ $t("outro3") }}
                <br/><br/>
                {{ $t("outro4") }}
              </span>
              <v-text-field v-model="restaurant" :label="$t('formrest')" :placeholder="$t('formrest')"></v-text-field>
              <v-text-field v-model="name" :label="$t('formname')" :placeholder="$t('formname')"></v-text-field>
              <v-text-field v-model="email" :label="$t('formmail')" :placeholder="$t('formmail')"></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="12">
          <v-btn
              :loading="loading"
              color="primary"
              x-large
              large
              @click="sendForm"
          >
            {{$t('formsend')}}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
.poll-c {
  max-width: 640px !important;
}

.text-c {
  font-size: 16px;
}

.question-c {
  font-size: 18px;
  font-weight: 400;
}

.text-red {
  font-weight: bold;
  color: red;
}
</style>
<script>
// @ is an alias to /src
import Swal from "sweetalert2";

export default {
  name: 'Home',
  data() {
    return {
      loading: false,
      comment: null,
      restaurant: null,
      name: null,
      email: null,
      poll: {
        question1: null,
        question2: [],
        question3: null,
        question4: null,
        question5: null,
        question6: null,
        question7: null,
        question8: null
      },
      response: null,
      data: []
    };
  },
  methods: {
    sendForm() {
      if(this.poll.question1 == null || this.poll.question2.count == 0
          || this.poll.question3 == null || this.poll.question4 == null
          || this.poll.question7 == null || this.poll.question8 == null
      ) {
        Swal.fire({
          icon: 'error',
          title: this.$t('errortitle'),
          text: this.$t('errorreq'),
        });
      } else {
        this.loading = true;
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            restaurant: this.restaurant ,
            comment: this.comment,
            formKey: "1234",
            q1: this.poll.question1,
            q2: this.poll.question2,
            q3: this.poll.question3,
            q4: this.poll.question4,
            q5: this.poll.question5,
            q6: this.poll.question6,
            q7: this.poll.question7,
            q8: this.poll.question8,
            lang: this.$i18n.locale
          })
        };
        fetch("https://poll-api.cut.gd/poll", requestOptions)
            .then(async response => {
              this.loading = false;

              const data = await response.json();

              // check for error response
              if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
              }

              if(data.state !== undefined) {
                switch(data.state) {
                  case 'done':
                    Swal.fire({
                      icon: 'success',
                      title: this.$t('successtitle'),
                      text: this.$t('successtext'),
                    });
                    break;
                  case 'spam':
                    Swal.fire({
                      icon: 'error',
                      title: this.$t('errortitle'),
                      text: this.$t('errordup'),
                    });
                    break;
                  default:
                    Swal.fire({
                      icon: 'error',
                      title: this.$t('errortitle'),
                      text: this.$t('errorukn'),
                    });
                    break;
                }
              } else {
                Swal.fire({
                  icon: 'error',
                  title: this.$t('errortitle'),
                  text: this.$t('errorukn'),
                });
              }
            })
            .catch(error => {
              this.loading = false;

              Swal.fire({
                icon: 'error',
                title: this.$t('errortitle'),
                text: error,
              });
            });
      }
    }
  }
}
</script>
