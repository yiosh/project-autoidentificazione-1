<template>
    <v-card class="mx-auto" max-width="500" :elevation="elevation">
        <v-toolbar color="#f2f2f2" light elevation="0">
            <v-img
                contain
                max-height="48px"
                src="https://online.betitaly.it/l.ashx?u=layout/logo.png"
            ></v-img>
            <!-- <v-toolbar-title class="mx-auto">
                <strong style="color: #150b48"
                    >AUTOIDENTIFICAZIONE</strong
                ></v-toolbar-title
            > -->
        </v-toolbar>

        <v-card-text>
            <v-container>
                <v-row>
                    <v-col class="d-flex justify-center">
                        <strong class="text-center" style="color: #150b48"
                            >AUTOIDENTIFICAZIONE</strong
                        >
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <p>
                            GILUPI SRL deve effettuare la corretta verifica
                            della tua identità come previsto dalle disposizioni
                            vigenti in materia.
                        </p>
                        <p>
                            L'autoidentificazione consiste nel caricamento di un
                            documento di identità e di un selfie con lo stesso.
                        </p>
                        <p>
                            Dovrai fornire il tuo indirizzo E-mail ed il tuo
                            numero di cellulare. Non è necessario essere
                            presente in un nostro Punto Vendita per la
                            validazione del tuo account.
                        </p>
                        <p>
                            Avviando la procedura ci autorizzi ad usare i tuoi
                            dati per l'identificazione come indicato nella
                            nostra informativa che puoi leggere
                            <a
                                href="https://online.betitaly.it/privacy?cookieprivacy=true"
                                target="__blank"
                                >QUI</a
                            >.
                        </p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn
                            ref="landingBtn"
                            color="#1eaa03"
                            block
                            dark
                            large
                            :to="{ name: 'StepOne' }"
                            ><strong>INIZIA</strong></v-btn
                        >
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
import EventBus from "../eventbus";

export default {
    mounted() {
        EventBus.$on("landingsubmit", () => {
            this.$refs.landingBtn.$el.click();
        });
    },
    computed: {
        elevation() {
            if (this.$vuetify.breakpoint.smAndDown) {
                return 0;
            }
            return 2;
        }
    },
    methods: {
        increment() {
            console.log("increment");
            this.$store.commit("increment");
        }
    }
};
</script>
