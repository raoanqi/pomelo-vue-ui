import { defineComponent, toRefs } from 'vue'
import { treeProps, TreeProps } from './tree-types.ts'

export default defineComponent({
  name: 'PTree',
  props: treeProps,
  setup(props: TreeProps) {
    return () => {
      return <div class="p-tree"></div>
    }
  }
})
