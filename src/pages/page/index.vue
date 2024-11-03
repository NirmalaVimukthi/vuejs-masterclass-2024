
<script setup lang="ts" >

import { supabase } from '@/stores/lib/superbaseClient';
import type { Tables } from 'databases/types';
import { ref, onMounted } from 'vue';


// const getPages = async () => {
//     const { data , error } = await supabase.from('projects').select()

//     if(error) console.log(error);

//     console.log('Projects pages : ', data)

// }
//await getPages()

;(async () => {
    //..
})()


/*data assign to other veriable 

        let projects:any

   this time template to assign only dev envirmnet but when  refresh dot data here. 
*/

//data assign to ref veriable that time can see data in template when refresh 
//let projects= ref()

//step 2 

const projects= ref<Tables<'projects'>[] | null>(null)


;(async () => {
    const { data , error } = await supabase.from('projects').select()

    if(error) console.log(error);

    projects.value = data;
    console.log('Projects pages : ', projects.value)


})()





</script>
<template>
    <div>
        <h1>
            Page of Projects 
        <RouterLink to="/" > Go to home</RouterLink>
        </h1>

        <!-- {{ projects }}  -->
        
        <ul>
            <li v-for="project in projects" :key="project.id"> 
                {{ project.name }}
            </li>
        </ul>
   
   </div>
</template>
