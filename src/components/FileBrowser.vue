<template>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><i class="bi bi-hdd-network"></i></li>
      <li class="breadcrumb-item"
        v-for="(item, index) in dir"
        :class="{ 'active': index+1 === dir.length }"
        :key="index">
        <a v-if="index+1 !== dir.length" href="#" @click="gotoDir(index)">{{ item }}</a>
        <span v-else>{{ item }}</span>
      </li>
    </ol>
  </nav>

  <div class="list-group">
    <button type="button" class="list-group-item list-group-item-action" @click="dir.pop();">
      <i class="bi bi-arrow-up-circle"></i> ..
    </button>
    <button v-for="(item, index) in files"
      type="button" class="list-group-item list-group-item-action" :key="index"
      @click="item.isFile ? getFile(item.name) : enterDir(item.name)">
      <i v-if="item.isFile" class="bi bi-file-earmark-arrow-down"></i>
      <i v-else class="bi bi-folder-symlink"></i>
      {{ item.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'FileBrowser',
  data() {
    return {
      dir: ['Home', 'Library', 'Backup', 'Data',],
      files: [
        {
          name: 'folder1',
          isFile: false
        },
        {
          name: 'folder2',
          isFile: false
        },
        {
          name: 'file1.txt',
          isFile: true
        },
        {
          name: 'file2.jpg',
          isFile: true
        },
        {
          name: 'file3.mp3',
          isFile: true
        },
        {
          name: 'file4.mkv',
          isFile: true
        }
      ]
    }
  },
  methods: {
    async gotoDir(index) {
      this.dir = this.dir.slice(0, index + 1);
    },
    async enterDir(name) {
      this.dir.push(name);
    },
    async getFile(name) {
      alert(`Download ${this.dir.concat(name).join('/')}`);
    }
  }
}
</script>
