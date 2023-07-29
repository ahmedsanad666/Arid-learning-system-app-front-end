<template>
  <section class="min-h-screen py-4">
    <h1 class="text-center md:text-3xl text-xl font-bold py-3 my-4">
      اضافة مقال جديد
    </h1>

    <div class="container">
        <base-spinner v-if="isLoading"></base-spinner>
      <form class="md:w-1/2 w-3/4 m-auto" @submit.prevent="submitData">
        <div class="mb-6">
          <label
            for="title"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >عنوان المقاله</label
          >
          <input
            type="text"
            id="title"
            class=" outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="اضف عنوان"
            required
            v-model.trim="title"
          />
          <p class="text-xl  text-red-700 py-3" v-if="!isValid">لا يمكن ان يكون خال</p>

        </div>
        <div class="mb-6">
          <label
            for="content"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >محتوى المقالة </label
            >
            <div id="editor-container" class="w-full  h-64 rounded-lg shadow-xl shadow-slate-400 outline-none py-4 px-3"  ></div>
            <!-- <textarea  id="content"placeholder="اضافة محتوى المقال" v-model.trim="content"></textarea> -->
            <p class="text-xl  text-red-700 py-3" v-if="!isValid">لا يمكن ان يكون خال</p>
        </div>
        <div>
   
    <!-- Your form inputs here -->
    
    <!-- Your form submission button here -->
</div>

<button
type="submit"
class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
Submit
</button>
</form>
<button @click="test">send</button>
    </div>
  </section>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import Quill from 'quill';

import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
    components: {
    QuillEditor
  }
,
    data(){
        return{
          
            title:'',
            content:'',
            error:'',
            isLoading:'',
            isValid:true


        }
    },

    
    methods:{
       
      async  submitData(){
            this.isValid = true;
            if(this.title === '' || this.content === ''){
                this.isValid = false;
                return;
            }

        
            const UserId = this.$store.getters['auth/userId'];
                const payLoad = {
                    apiUserId:UserId,
                    title:this.title,
                    content:this.content
                }
                console.log(payLoad);

                this.isLoading = true;
                try{

                    await this.$store.dispatch('blog/AddBlog',payLoad);
                    this.$router.go(-1);
                }catch(e){
                    this.error = e.message || 'failed to send try again';
                }
                this.isLoading = false;
        }
        
    },
    mounted() {
    const quillOptions = {
        modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          
          [{ align: [] }],
          [{ header: [1, 2, false] }],
         
        ]
      },
      theme: 'snow'
    };

    this.quill = new Quill('#editor-container', quillOptions);
    this.quill.on('text-change', () => {
      this.content = this.quill.root.innerHTML;
    });
  },
  beforeUnmount() {
    this.quill.off('text-change');
  },


}
</script>

<style></style>
