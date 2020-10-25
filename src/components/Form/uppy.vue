<template>
  <div :id="uppyId">
    <div class="ThumbnailContainer" v-if="collection === 'thumbnail'">
      <button id="open-thumbnail-modal" class="button">Select file</button>
    </div>
    <div class="DashboardContainer" v-else></div>
  </div>
</template>

<script>
const Uppy = require("@uppy/core");
const XHRUpload = require("@uppy/xhr-upload");
const Dashboard = require("@uppy/dashboard");

export default {
  props: {
    modelClass: {
      type: String,
      required: true
    },
    modelId: {
      type: String,
      required: true
    },
    collection: {
      type: String,
      required: false
    },
    endpoint: {
      type: String,
      required: false,
      default() {
        return "/upload";
      }
    }
  },

  data() {
    return {};
  },

  computed: {
    uppyId() {
      return this.modelClass + "-" + this.modelId + "-" + this.collection;
    }
  },

  mounted() {
    const uppy = Uppy({
      id: this.uppyId,
      autoProceed: false,
      debug: true,
      restrictions: {
        maxFileSize: false,
        allowedFileTypes: ["image/*", "application/pdf"]
      },
      allowMultipleUploads: false,
      showProgressDetails: true,
      meta: {
        modelClass: this.modelClass,
        modelId: this.modelId,
        collection: this.collection
      }
      // // eslint-disable-next-line no-unused-vars
      // onBeforeFileAdded: (currentFile, files) => Promise.resolve(),
      // // eslint-disable-next-line no-unused-vars
      // onBeforeUpload: (files, done) => Promise.resolve()
    });

    uppy.use(Dashboard, {
      inline: true,
      target: ".DashboardContainer",
      replaceTargetContent: true,
      note: "Images and PDF only.",
      maxHeight: 500,
      metaFields: [
        { id: "owner", name: "Owner", placeholder: "name of the photographer/owner" },
        { id: "caption", name: "Caption", placeholder: "describe what the image is about" },
        { id: "order", name: "Order", placeholder: "order" }
      ]
    });
    uppy.use(XHRUpload, {
      endpoint: this.endpoint,
      headers: {
        "X-CSRF-TOKEN": window.csrfToken
      }
    });
    uppy.run();
  },

  methods: {}
};
</script>

<style src="uppy/dist/uppy.css"></style>
