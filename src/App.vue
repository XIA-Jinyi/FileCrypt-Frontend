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

        <h3 class="mt-4">文件浏览</h3>
        <FileBrowser></FileBrowser>
      </div>

      <div class="col col-12 col-md-5 mt-4">
        <h3>后台日志</h3>
        <ShowLog></ShowLog>
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
import ShowLog from "./components/ShowLog.vue"
import FileBrowser from "./components/FileBrowser.vue"

export default {
  name: 'FileCrypt',
  components: {
    CryptSettings,
    BackupSettings,
    ShowLog,
    FileBrowser
  }
}
</script>
