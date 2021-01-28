<template>
    <step
        title="VERIFICA E-MAIL"
        number="2"
        buttonText="PROCEDI"
        goTo="StepThree"
        :isDisabled="isDisabled"
        :payload="form"
    >
        <v-row>
            <v-col cols="12" md="4" class="d-flex justify-center align-center">
                <v-icon :size="$vuetify.breakpoint.smAndDown ? 80 : 150"
                    >mdi-email-outline</v-icon
                >
            </v-col>
            <v-col cols="12" md="8" class="d-flex flex-column align-left">
                <!-- <p class="text">
                    Inserisci indirizzo e-mail con cui ti sei registrato dove ti
                    invieremo il codice sicurezza
                </p> -->
                <p class="text">
                    Inserisci l'indirizzo E-Mail con il quale ti sei registrato
                    per ricevere il codice di sicurezza.
                </p>
                <v-text-field
                    autofocus
                    dense
                    label="Inserisci e-mail"
                    outlined
                    :rules="[rules.required, rules.email]"
                    type="email"
                    v-model="form.email"
                ></v-text-field>
            </v-col>
        </v-row>
    </step>
</template>

<script>
import Step from "../../components/Step";
export default {
    components: {
        Step
    },
    data: () => ({
        form: {
            email: ""
        },
        rules: {
            required: value => !!value || "Obbligatorio.",
            email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return pattern.test(value) || "E-mail non valido";
            }
        }
    }),
    computed: {
        isDisabled() {
            if (this.form.email && this.rules.email(this.form.email) === true) {
                return false;
            }
            return true;
        }
    }
};
</script>
