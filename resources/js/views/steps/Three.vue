<template>
    <step
        title="VERIFICA E-MAIL"
        number="3"
        buttonText="PROCEDI"
        goTo="StepFour"
        :isDisabled="isDisabled"
        :payload="form"
    >
        <v-row>
            <v-col cols="12" md="6" class="d-flex justify-center align-center">
                <v-icon size="150">mdi-cellphone-link</v-icon>
            </v-col>
            <v-col cols="12" md="6" class="d-flex flex-column align-left">
                <!-- <v-form> -->
                <p>
                    Per procedere alla verifica, inserisci il codice che ti
                    abbiamo inviato sulla e-mail di registrazione.
                </p>
                <v-text-field
                    autofocus
                    dense
                    label="Inserisci codice"
                    outlined
                    v-on:keyup.enter="submitForm"
                    v-model="form.verification_code"
                ></v-text-field>
                <!-- </v-form> -->
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
            verification_code: ""
        }
    }),
    computed: {
        isDisabled() {
            return false;
            if (this.form.verification_code) {
                return false;
            }
            return true;
        }
    }
};
</script>
