<template>
<!--
<Vif />
<VSHOW />
<VTEXT />
<VHTML />
<VFOR />
<VSLOT />
<CARD>
<template #header>
<h1>Cabeçalho do meu card</h1>
</template>
<template #title>
<h2>Título do meu card</h2>
</template>
<template #content>
<p>aqui está o conteúdo do meu card</p>
</template>
</CARD>
<VPRE />
<VCLOAK />
<VONCE />
<VMEMO />
<Composition/>
<Options />
-->
<CompositionCard
  title="Este é o título do meu card"
  :body="'Este é o conteudo do meu card'"
  :access="1230"
  :status="true"
  format="user"
/>
</template>

<script setup>
/*
import Vif from '@/components/Directives/VIF.vue'
import VSHOW from '@/components/Directives/VSHOW.vue'
import VTEXT from '@/components/Directives/VTEXT.vue'
import VHTML from '@/components/Directives/VHTML.vue'
import VFOR from '@/components/Directives/VFOR.vue'
import VSLOT from '@/components/Directives/VSLOT.vue'
import CARD from '@/components/Directives/CARD.vue'
import VPRE from '@/components/Directives/VPRE.vue'
import VCLOAK from '@/components/Directives/VCLOAK.vue'
import VONCE from '@/components/Directives/VONCE.vue'
import VMEMO from '@/components/Directives/VMEMO.vue'
import Composition from '@/components/Register/Composition.vue'
import Options from '@/components/Register/Options.vue'
*/

import CompositionCard from '@/components/Props/CompositionCard.vue'

</script>
