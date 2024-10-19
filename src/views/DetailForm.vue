<template>
    <div v-if="warranty">
      <h2>Warranty Detail</h2>
      <p>ID: {{ warranty.id }}</p>
      <p>Product Name: {{ warranty.productName }}</p>
      <p>Customer Name: {{ warranty.customerName }}</p>
      <p>Warranty Period: {{ warranty.warrantyPeriod }} months</p>
      <p>Purchase Date: {{ warranty.purchaseDate }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import instanceAxios from '@/ultis/configAxios'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const warranty = ref({})
  
  const fetchWarranty = async () => {
    const response = await instanceAxios.get(`/warranties/${route.params.id}`)
    warranty.value = response.data
  }
  
  onMounted(fetchWarranty)
  </script>
  