<template>
  <main>
    <RouterLink to="/create" class="btn btn-primary">Create Warranty</RouterLink>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Customer Name</th>
          <th>Warranty Period</th>
          <th>Purchase Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="warranty in warranties" :key="warranty.id">
          <td>{{ warranty.id }}</td>
          <td>{{ warranty.productName }}</td>
          <td>{{ warranty.customerName }}</td>
          <td>{{ warranty.warrantyPeriod }} months</td>
          <td>{{ warranty.purchaseDate }}</td>
          <td>
            <RouterLink :to="{ name: 'detail', params: { id: warranty.id } }" class="btn btn-info">View</RouterLink>
            <RouterLink :to="{ name: 'edit', params: { id: warranty.id } }" class="btn btn-warning">Edit</RouterLink>
            <button class="btn btn-danger" @click="handleDelete(warranty.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import instanceAxios from '@/ultis/configAxios'

const warranties = ref([])

const fetchWarranties = async () => {
  const response = await instanceAxios.get('/warranties')
  warranties.value = response.data
}

const handleDelete = async (id) => {
  const isConfirm = confirm('Are you sure you want to delete this warranty?')
  if (!isConfirm) return
  await instanceAxios.delete(`/warranties/${id}`)
  fetchWarranties()
}

onMounted(fetchWarranties)
</script>
