<template>
    <step
        title="VERIFICA TELEFONO"
        number="5"
        buttonText="PROCEDI"
        goTo="StepSix"
        :isDisabled="isDisabled"
        :payload="form"
    >
        <v-row>
            <v-col cols="12" md="6" class="d-flex justify-center align-center">
                <v-icon :size="$vuetify.breakpoint.smAndDown ? 80 : 150"
                    >mdi-cellphone-iphone</v-icon
                >
            </v-col>
            <v-col cols="12" md="6" class="d-flex flex-column align-left">
                <p>
                    Inserisci il numero di telefono con cui ti sei registrato
                    dove ti invieremo il codice sicurezza.
                </p>
                <v-text-field
                    dense
                    label="Inserisci numero"
                    outlined
                    v-model="form.telefono"
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
            telefono: ""
        }
    }),
    computed: {
        isDisabled() {
            if (this.form.telefono) {
                return false;
            }
            return true;
        }
    }
};
</script>
