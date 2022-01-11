// components/typeItem/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    typeData:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    typeSelect(e){
      console.log('选中分类：',e)
      this.triggerEvent('toSelectType',id)
    }
  }
})
