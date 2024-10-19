<template>
    <div>
      <h2>Create Warranty</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="productName">Product Name</label>
          <input v-model="warranty.productName" class="form-control" />
        </div>
        <div class="form-group">
          <label for="customerName">Customer Name</label>
          <input v-model="warranty.customerName" class="form-control" />
        </div>
        <div class="form-group">
          <label for="warrantyPeriod">Warranty Period (months)</label>
          <input v-model="warranty.warrantyPeriod" type="number" class="form-control" />
        </div>
        <div class="form-group">
          <label for="purchaseDate">Purchase Date</label>
          <input v-model="warranty.purchaseDate" type="date" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import instanceAxios from '@/ultis/configAxios'
  import { useRouter } from 'vue-router'
  
  const warranty = ref({
    productName: '',
    customerName: '',
    warrantyPeriod: '',
    purchaseDate: ''
  })
  
  const router = useRouter()
  
  const handleSubmit = async () => {
    await instanceAxios.post('/warranties', warranty.value)
    router.push({ name: 'home' })
  }
  </script>
  