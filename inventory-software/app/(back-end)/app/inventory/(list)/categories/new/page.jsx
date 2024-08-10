"use clients"


import TextInput from '../../../../../_components/FormInput/textInput'
import TextareaInput from '../../../../../_components/FormInput/textAreaInput'
//import { useForm } from 'react-hook-form'

const NewCategory = () => {


  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();  
  //  function mad(data){
  //   console.log(data);
  //onSubmit={handleSubmit(mad)}
  //   return data


  return (
    <form className='w-full max-w-4xl mx-auto p-4 bg-white mt-8 border border-gray-50 rounded-xl shadow-sm sm:p-6 md:p-8 dark:bg-white dark:border-gray-700'>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div class="sm:col-span-2">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-600">Title</label>
          <input
            // {...register("title", {required:true})}
            type="text" name="title" id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 
           focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-slate-600 dark:focus:ring-primary-500
             dark:focus:border-primary-500"
            placeholder="Type product name" required="" />
        </div>
        <div class="w-full">
          <label
            for="brand"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-600">Brand</label>
          <input
            type="text"
            // {...register("brand",{required:true})}
            name="brand" id="brand"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl 
           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-600
    dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Product brand" required="" />
        </div>
        {/* <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
           
          />
      
          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          /> */}

      </div>
      <div className='mt-6 sm:col-span-1'>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
        focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center
         dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
      </div>
    </form>
  )
}

export default NewCategory
