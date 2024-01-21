<template>
    <div>
        <div class="app">
            <div class="apper1">
                <el-input  placeholder="请输入日期" type="date" v-model="abj.date"></el-input>
            </div>
            <div class="apper2">
                <el-input placeholder="请输入姓名" v-model="abj.name"></el-input>
            </div>
            <div class="apper3">
                <el-input  placeholder="请输入活动" v-model="abj.sport"></el-input>
            </div>
            <div class="apper4">
                <el-input  placeholder="请输入所在城市" v-model="abj.address"></el-input>
            </div>
            <div class="apper5">
                <el-input  placeholder="请输入电话" v-model="abj.phone"></el-input>
            </div>
            <el-button type="primary" @click="add()">开始报名</el-button>
        </div>

        <el-table
                ref="singleTable"
                :data="tableData"
                highlight-current-row
                @current-change="handleCurrentChange"
                style="width: 100%">
            <el-table-column
                    type="index"
                    width="50">
            </el-table-column>
            <el-table-column
                    property="date"
                    label="活动时间"
                    width="120">
            </el-table-column>
            <el-table-column
                    property="name"
                    label="参与人姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    property="sport"
                    label="活动名称"
                    width="120">
            </el-table-column>
            <el-table-column
                    property="address"
                    label="所在城市"
                    width="120">
            </el-table-column>
            <el-table-column
                    property="phone"
                    label="联系电话"
                    >
            </el-table-column>
            <el-table-column>
                <!-- eslint-disable-next-line -->
                <template v-slot="scope" >
                    <el-button  type="primary" size="small" @click="del(scope.$index)">删除</el-button>
                    <el-button type="danger" size="small"  @click="edit(scope.$index,scope.row)">编辑</el-button>

                </template>
            </el-table-column>
        </el-table>
      <el-dialog title="收货地址" v-model="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="活动时间" :label-width="formLabelWidth">
            <el-input v-model="form.date" autocomplete="off" type="date"></el-input>
          </el-form-item>
          <el-form-item label="参与人姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.sport" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="所在城市" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>

        <template v-slot:footer>
          <div  class="dialog-footer" >
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dir()">确 定</el-button>
          </div>
        </template>
      </el-dialog>
    </div>
</template>

<script>

export default {

    data() {
        return {

            editIndex:"",
            // dialogTableVisible: false,
            dialogFormVisible: false,
            abj:{
                date:'',
                name:'',
                sport:'',
                address:'',
                phone:''
            },
            erity:{
                date:'',
                name:'',
                sport:'',
                address:'',
                phone:''
            },
            form: {
                date:'',
                name:'',
                sport:'',
                address:'',
                phone:''
            },
            formLabelWidth: '120px',
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                sport: '攀岩',
                address: '北京',
                phone:'18173539018'
            },{
                date: '2023-5-20',
                name: '王小牛',
                sport: '登山',
                address: '湖南',
                phone:'18175469498'
            },{
                date: '2023-6-1',
                name: '高启强',
                sport: '潜水',
                address: '重庆',
                phone:'15498491965'
            },{
                date: '2023-4-25',
                name: '高启盛',
                sport: '帆船',
                address: '四川',
                phone:'18651941987'
            },{
                date: '2023-5-23',
                name: '安欣',
                sport: '露营',
                address: '湖北',
                phone:'18651949848'
            }],

        }
    },

    methods: {

        setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);

        },
        handleCurrentChange(val) {
            this.currentRow = val;

        },
        add(){
            //  var _id=Math.max(...this.tableData.map(function(item){return item.id}))+1;

            this.tableData.push({
                date:this.abj.date,
                name:this.abj.name,
                sport:this.abj.sport,
                address:this.abj.address,
                phone:this.abj.phone,
// id:_id
            }),
                this.abj={}



        },
        del(index){

            this.tableData.splice(index,1)

            // console.log(row.$refs)
        },
        edit(index, row){
            this.dialogFormVisible = true
            this.form={
                date:row.date,
                name:row.name,
                sport:row.sport,
                address:row.address,
                phone:row.phone,
            }
            //     this.form = Object.assign({}, row); //这句是关键！！！
            //  var _index = index;
            //   console.log(index);
            //   console.log(_index);
            //     console.log(this.tableData[index].name)
            //  this.dialogFormVisible = true

            this.editIndex = index
        },
        dir(){
            // this.dialogFormVisible = false;
            //  console.log(this.tableData[wor])
            //   this.tableData=[{
            //     date:this.form.date,
            // name:this.form.name,
            //  address:this.form.address
            //   }]
            //  console.log(this.tableData[wor])
            // this.FormVisible = false;


            this.tableData.splice(this.editIndex,1,this.form)
            console.log(this.tableData[this.editIndex])
            this.dialogFormVisible = false;
        }

    }

}

</script>
<style lang="less" scoped>
.app{
  display: flex;
  .apper1{
    width: 170px;
    padding: 0 10px;
  }
  .apper2{
    width: 170px;
    padding: 0 10px;
  }
  .apper3{
    width: 170px;
    padding: 0 10px;
  }
  .apper4{
    width: 170px;
    padding: 0 10px;
  }
  .apper5{
    width: 170px;
    padding: 0 10px;
  }
}
</style>