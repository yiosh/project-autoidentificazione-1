<template>
    <step
        title="AUTOIDENTIFICAZIONE"
        number="1"
        buttonText="PROCEDI"
        goTo="StepTwo"
        :isDisabled="isDisabled"
        :payload="form"
    >
        <v-form v-model="valid">
            <v-row>
                <v-col cols="12" md="4" class="d-flex justify-center">
                    <v-icon :size="$vuetify.breakpoint.smAndDown ? 80 : 150"
                        >mdi-shield-key-outline</v-icon
                    >
                </v-col>
                <v-col cols="12" md="8">
                    <v-text-field
                        autofocus
                        dense
                        color="#160c49"
                        label="Nome"
                        :rules="[rules.required]"
                        v-model="form.nome"
                        :disabled="nomeDisabled"
                        outlined
                    ></v-text-field>
                    <v-text-field
                        dense
                        color="#160c49"
                        label="Cognome"
                        :rules="[rules.required]"
                        v-model="form.cognome"
                        :disabled="cognomeDisabled"
                        outlined
                    ></v-text-field>
                    <v-text-field
                        @keydown.space.prevent
                        dense
                        color="#160c49"
                        :rules="[rules.counterMax, rules.counterMin]"
                        label="Codice Fiscale"
                        v-model="form.codice_fiscale"
                        :disabled="cfDisabled"
                        outlined
                    ></v-text-field>
                    <v-text-field
                        dense
                        color="#160c49"
                        label="Username"
                        :rules="[rules.required]"
                        v-model="form.username"
                        :disabled="usernameDisabled"
                        outlined
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-form>
    </step>
</template>

<script>
import Step from "../../components/Step";

export default {
    components: {
        Step
    },
    data: () => ({
        valid: true,
        form: {
            nome: "",
            cognome: "",
            codice_fiscale: "",
            username: ""
        },
        nomeDisabled: false,
        cognomeDisabled: false,
        cfDisabled: false,
        usernameDisabled: false,
        rules: {
            required: value => !!value || "Obbligatorio",
            counterMin: value =>
                value.length === 16 || "Inserisci un codifce fiscale valido",
            counterMax: value =>
                value.length <= 16 || "Inserisci un codifce fiscale valido"
        }
    }),
    created() {
        this.form = Object.assign(this.form, this.$store.state.form);
    },
    mounted() {
        if (this.form.nome) {
            this.nomeDisabled = true;
        }
        if (this.form.cognome) {
            this.cognomeDisabled = true;
        }
        if (this.form.codice_fiscale) {
            this.cfDisabled = true;
        }
        if (this.form.username) {
            this.usernameDisabled = true;
        }
    },
    computed: {
        isDisabled() {
            if (
                this.form.nome &&
                this.form.cognome &&
                this.form.codice_fiscale &&
                this.form.codice_fiscale.length === 16 &&
                this.form.username
            ) {
                return false;
            }
            return true;
        }
    }
};
</script>
