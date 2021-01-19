<template>
    <v-app id="inspire">
        <v-container
            style="overflow-x: hidden"
            class="h-100"
            :class="{ 'pa-0': $vuetify.breakpoint.smAndDown }"
        >
            <v-row
                class="h-100"
                :class="{ 'align-center': $vuetify.breakpoint.mdAndUp }"
            >
                <v-col :class="{ 'pa-0': $vuetify.breakpoint.smAndDown }">
                    <transition name="page" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </v-col>
            </v-row>
        </v-container>
        <v-footer>
            <v-container>
                <v-row>
                    <v-col
                        :cols="cols"
                        class="d-flex justify-center align-center py-0"
                        ><small
                            >GI.LU.PI. SRL P.I. 03350310755 Conc. GAD
                            15074</small
                        ></v-col
                    >
                    <v-col class="d-flex justify-center align-center py-0">
                        <a
                            href="https://online.betitaly.it/privacy?cookieprivacy=true"
                            target="__blank"
                            ><small>Privacy</small></a
                        ></v-col
                    >
                </v-row>
            </v-container>
        </v-footer>
    </v-app>
</template>

<script>
import EventBus from "./eventbus";

export default {
    created() {
        this.$router.push("/");
        // console.log(this.$vuetify.breakpoint);
    },
    mounted() {
        document.addEventListener("keypress", e => {
            if (this.$route.name == "landing") {
                if (e.key === "Enter") {
                    EventBus.$emit("landingsubmit");
                }
            } else {
                if (e.key === "Enter") {
                    EventBus.$emit("formsubmit");
                }
            }
        });
    },
    computed: {
        cols() {
            if (this.$vuetify.breakpoint.name == "xs") {
                return 12;
            } else {
                return 6;
            }
        }
    }
};
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
    transition: opacity 1s, transform 0.5s;
}
.page-enter,
.page-leave-to {
    opacity: 0;
    transform: translateX(-10%);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
