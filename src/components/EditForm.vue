<template>
    <div>
      <h2>Edit Warranty</h2>
      <form @submit.prevent="handleUpdate">
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
        <button type="submit" class="btn btn-primary">Update</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import instanceAxios from '@/ultis/configAxios'
  import { useRoute, useRouter } from 'vue-router'
  
  const route = useRoute()
  const router = useRouter()
  const warranty = ref({})
  
  const fetchWarranty = async () => {
    const response = await instanceAxios.get(`/warranties/${route.params.id}`)
    warranty.value = response.data
  }
  
  const handleUpdate = async () => {
    await instanceAxios.put(`/warranties/${warranty.value.id}`, warranty.value)
    router.push({ name: 'home' })
  }
  
  onMounted(fetchWarranty)
  </script>
  