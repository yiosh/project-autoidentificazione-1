<template>
    <step
        title="VERIFICA TELEFONO"
        number="6"
        buttonText="PROCEDI"
        goTo="StepSeven"
        :isDisabled="isDisabled"
        :payload="form"
    >
        <v-row>
            <v-col cols="12" md="6" class="d-flex justify-center align-center">
                <v-icon size="150">mdi-cellphone-link</v-icon>
            </v-col>
            <v-col cols="12" md="6" class="d-flex flex-column align-left">
                <p>
                    Per procedere alla verifica, inserisci il codice che ti
                    abbiamo inviato sul numero cui ti sei registrato.
                </p>
                <v-text-field
                    dense
                    label="Inserisci codice"
                    outlined
                    v-model="form.sms_code"
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
            sms_code: ""
        }
    }),
    computed: {
        isDisabled() {
            if (this.form.sms_code) {
                return false;
            }
            return true;
        }
    }
};
</script>
