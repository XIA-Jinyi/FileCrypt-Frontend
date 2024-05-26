<template>
  <nav class="navbar navbar-expand-sm bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#"><img src="./assets/logo.png" height="22pt"> 文件系统加密驱动</a>
    </div>
  </nav>

  <div class="container">
    <div class="row">

      <div class="col col-12 col-md-7 mt-4">
        <h3>加密选项</h3>
        <CryptSettings></CryptSettings>

        <h3 class="mt-4">备份选项</h3>
        <BackupSettings></BackupSettings>
      </div>

      <div class="col col-12 col-md-5 mt-4">
        <h3>后台日志</h3>
        <div class="card mt-3 text-secondary" style="min-height: 200px; max-height: 500px; overflow-y: auto;">
          <pre class="card-body">{{ this.log }}</pre>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-2 mb-3 text-muted small d-flex justify-content-end">
    作者：夏锦熠、何冠立、黄凯博、张原赫、张宇轩
  </div>
</template>

<script>
import CryptSettings from "./components/CryptSettings.vue"
import BackupSettings from "./components/BackupSettings.vue"
import io from 'socket.io-client';

export default {
  name: 'FileCrypt',
  mounted() {
    document.title = "文件系统加密驱动";
    this.socket = io(window.location.origin);
    this.socket.on('log', (msg) => {
      let now = new Date();
      let localTime = now.toLocaleString();
      this.log = `[${localTime}] ${msg}\n${this.log}`;
    });
  },
  data() {
    return {
      log: "",
      socket: null
    }
  },
  components: {
    CryptSettings,
    BackupSettings
  }
}
</script>
