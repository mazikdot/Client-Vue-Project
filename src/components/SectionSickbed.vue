<template>
  <div id="sickbed" v-cloak>
    <div class="table-wrapper" v-cloak>
      <div class="table-title" v-cloak>
        <div class="row" v-cloak>
          <div class="col-sm-9">
            <h2
              class="fontsizebed"
              style="margin-left:200px ; font-size:20px; margin-top:10px; color:black;"
            >
              <b style="color:white;">ค้นหาเตียงผู้ป่วย</b>
            </h2>

           
          </div>
          <div class="col-sm-3">
            <div
              class="btn-group"
              data-toggle="buttons"
              v-cloak
              style="color:#ED5441"
            ></div>
          </div>
        </div>
      </div>
     
      <!-- <%= getdata %> -->
      <table v-cloak class="table table-striped table-hover" id="userTable">
        <thead v-cloak>
          <tr>
            <th style="width:100px;">ข้อมูลเตียงผู้ป่วย</th>
            <th style="width:80px;">วันที่บริจาค</th>
            <th style="width:60px;">ผู้บริจาคเตียงผู้ป่วย</th>
            <th style="width:100px;">ตำแหน่งเตียงผู้ป่วย</th>
            <th style="width:30px;">Status</th>
          </tr>
        </thead>
        <tbody v-cloak>
          <tr
            :key="row.sick_id"
            v-cloak
            v-for="row in allData"
            data-status="active"
          >
            <td>{{ row.data_sickbed }}</td>
            <td>
              วันที่บริจาค<br />{{ row.date_add }}<br />{{ row.sick_note }}
            </td>
            <td class="btn-sm manage">
              {{ row.users }}<br />ติดต่อได้ที่ : {{ row.user_phone }}<br />{{
                row.user_email
              }}
            </td>
            <td class="btn-sm manage">{{ row.address }}</td>
            <td>
              <span
                :class="[row.sit_id === 1 ? 'label label-danger' : '', '']"
                class="label label-success"
                >{{ row.sit_name }}</span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionSickbed",
  data() {
    return {
      allData: "",
      data_wang: "",
    };
  },
  methods: {
    fetchAllData: function() {
      axios.get("http://localhost:3000/all-sickbed").then((res) => {
        this.allData = res.data.data;
        // console.log(res.data.data)
        $(document).ready(function() {
          $("#userTable").DataTable();
        });
      });
    },
  },
  created() {
    this.fetchAllData();
  },
};
</script>

<style scoped></style>
