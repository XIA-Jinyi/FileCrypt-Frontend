<template>
  <div class="input-group mt-3">
    <span class="input-group-text"><i class="bi bi-folder2-open"></i></span>
    <input class="form-control flex-grow-1" placeholder="请输入加密路径" v-model="pathPrefix"
      :disabled="isLoaded || isLoading">
  </div>
  <div class="input-group mt-2">
    <span class="input-group-text"><i class="bi bi-key"></i></span>
    <input class="form-control" placeholder="请输入加密密码" v-model="password" :disabled="isLoaded || isLoading">
  </div>
  <div class="d-flex justify-content-between align-items-center mt-2">
    <div>
      <div v-if="isLoaded" class="small text-primary">
        <i class="bi bi-check-circle"></i> 驱动已加载
      </div>
      <div v-if="!isLoaded" class="small text-secondary">
        <i class="bi bi-exclamation-circle"></i> 驱动未加载
      </div>
    </div>
    <div>
      <button type="button" class="btn btn-success ms-2" :disabled="isLoaded || isLoading" @click="load()">
        <i v-if="!isLoading" class="bi bi-lock-fill"></i>
        <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        加载驱动
      </button>
      <button type="button" class="btn btn-danger ms-2" :disabled="!isLoaded || isUnloading" @click="unload()">
        <i v-if="!isUnloading" class="bi bi-unlock-fill"></i>
        <span v-if="isUnloading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        卸载驱动
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CryptSettings',
  mounted() {

  },
  data() {
    return {
      pathPrefix: '',
      password: '',
      isLoaded: false,
      isLoading: false,
      isUnloading: false
    }
  },
  methods: {
    async load() {
      this.isLoading = true;
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.isLoaded = true;
      this.isLoading = false;
    },
    async unload() {
      this.isUnloading = true;
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.isLoaded = false;
      this.isUnloading = false;
    }
  }
}
</script>
