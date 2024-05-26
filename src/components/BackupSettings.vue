<template>
  <div class="d-flex mt-3">
    <div class="input-group">
      <span class="input-group-text"><i class="bi bi-hdd-network"></i></span>
      <input class="form-control flex-grow-1" placeholder="备份服务器 HTTP 地址" v-model="input">
    </div>
    <button type="button" class="btn btn-outline-primary ms-2 flex-shrink-0" @click="set()">
      <i v-if="!isSetting" class="bi bi-gear"></i>
      <span v-if="isSetting" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      设置
    </button>
  </div>
  <div class="mt-2">
    <div class="small text-secondary">
      当前备份服务器：
      <a :href="server">{{ server }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackupSettings',
  mounted() {

  },
  data() {
    return {
      input: '',
      server: 'https://www.baidu.com/',
      isSetting: false,
    }
  },
  methods: {
    async set() {
      this.isSetting = true;
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.server = this.input;
      this.input = '';
      this.isSetting = false;
    }
  }
}
</script>
