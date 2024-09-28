const { createApp, ref, computed } = Vue;

const app = createApp({
    setup() {
      
        const numeroInicial = ref(0);

        
        const valorBinario = computed(() => {
            return numeroInicial.value >= 0 
                  ? numeroInicial.value.toString(2) 
                : '-' + Math.abs(numeroInicial.value).toString(2);
        });

       
        const valueText = computed(() => {
            if (numeroInicial.value > 0) {
                return "POSITIVO";
            } else if (numeroInicial.value < 0) {
                return "NEGATIVO";
            } else {
                return "0";
            }
        });

        
        const incrementar = () => {
            numeroInicial.value++;
        };

        
        const decrementar = () => {
            numeroInicial.value--;
        };

        return {
            numeroInicial,
            valorBinario,
            valueText,
            incrementar,
            decrementar
        };
    }
});

app.mount('#arley');
