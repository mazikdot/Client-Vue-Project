<template>
  <div v-if="user">
    <HeaderSickbed />
    <div>
      <main class="mn-inner">
        <div class="row" id="card-input">
          <div class="col s10 m10 l10">
            <div class="card">
              <div class="card-content">
                <form id="example-form" method="post" name="addemp">
                  <div>
                    <!-- <h3>สมัครบัญชีผู้ใช้</h3> -->
                    <h5 style="text-align: center;">
                      หาเตียงผู้ป่วยเพื่อใช้ในการรักษา
                    </h5>
                    <section class="section_insert">
                      <div class="wizard-content">
                        <div class="row">
                          <div class="col m12">
                            <div class="input-field col m12 s12">
                              <h5 style="font-size: 16px;">
                                เตียงที่ฉันต้องการ
                              </h5>
                              <input
                                id="sickw_name"
                                name="sickw_name"
                                v-model="sickw_name"
                                type="text"
                                placeholder="กรอกข้อมูลเตียงที่ฉันต้องการ"
                                required
                              />
                            </div>
                          </div>
                          <div class="col m12">
                            <div class="input-field col m6 s12">
                              <h5 style="font-size: 16px;">จำนวน</h5>
                              <input
                                id="sickw_amount"
                                name="sickw_amount"
                                v-model="sickw_amount"
                                type="number"
                                placeholder="จำนวนกรอกเป็นตัวเลข"
                                required
                              />
                            </div>
                            <div class="input-field col m6 s12">
                              <h5 style="font-size: 16px;">
                                ต้องการใช้เตียงผู้ป่วยระหว่างวันที่
                              </h5>
                              <input
                                id="datebetween"
                                name="datebetween"
                                v-model="datebetween"
                                type="text"
                                placeholder="กรอกวันที่ต้องการใช้เตียงผู้ป่วย เช่น 29-10-2564 จนถึง 8-11-2564"
                                required
                              />
                            </div>
                          </div>
                         
                          <div class="col m12">
                            <div class="input-field col m5 s12">
                              <h5 style="font-size: 16px;">
                               รายละเอียดอื่น ๆ 
                              </h5>

                              <input
                                id="sickw_note"
                                name="sickw_note"
                                type="text"
                                autocomplete="off"
                                v-model="sickw_note"
                                required
                                placeholder="หมายเหตุอื่น ๆ "
                              />
                            </div>

                            <!-- <div class="input-field col m7 s12">
                           <p id="barichak"><b>ร่วมกันบริจาคเตียงให้กับผู้ป่วยเพื่อช่วยเหลือ<br>แก่ผู้ที่ไม่มีเตียงผู้ป่วยที่จะรักษาโรค Covid - 19</b></p>
                          </div> -->
                          </div>
                          <div class="col m12">
                            <div class="input-field col m2 s12">
                              <!-- <button type="submit" name="add" onclick="return valid();" id="add" class="waves-effect waves-light btn indigo m-b-xs">ADD</button> -->
                              <input
                                type="button"
                                value="เพิ่มข้อมูลต้องการเตียง"
                                class="waves-effect waves-light btn indigo m-b-xs"
                                @click="submitData()"
                              />
                              <!-- <a href="login.php" style="color:FFFFFF;" class="waves-effect waves-light btn indigo2 m-b-xs">เข้าสู่ระบบ</a> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div v-else>
    {{ messageToken }}
  </div>
</template>

<script>
import HeaderSickbed from "../components/HeaderSickbed.vue";
export default {
  name: "FormWant",
  props: ["user"],
  components: {
    HeaderSickbed,
  },
  data() {
    return {
      user_username: "",
      sickw_name: "",
      sickw_amount: "",
      sickw_note: "",
      datebetween: "",
      select_province: "",
      province_data: "",
      select_amphures: "",
      amphures_data: "",
      select_districts: "",
      districts_data: "",
      village: "",
      messageToken: "Invalid token",
    };
  },
  methods: {
    fetchProvince: function() {
      axios.get("http://localhost:3000/ReadProvince").then((response) => {
        // this.prefix_test = []
        //   console.log(response.data)
        this.province_data = response.data.data;
        this.select_amphures = "";
        this.amphures_data = "";
        this.select_districts = "";
        this.districts_data = "";
        //console.log(this.prefix_test);
      });
    },
    fetchAmphures: function() {
      axios
        .put("http://localhost:3000/ReadAmphures", {
          province_id: this.select_province,
        })
        .then((response) => {
          this.amphures_data = response.data.data;
          this.select_amphures = "";
          this.select_districts = "";
          this.districts_data = "";
        });
    },

    fetchDistricts: function() {
      axios
        .put("http://localhost:3000/ReadDistrict", {
          amphure_id: this.select_amphures,
        })
        .then((response) => {
          this.districts_data = response.data.data;
          // console.log(response.data.data);
          this.select_districts = "";
        });
    },
    submitData() {
      // console.log('test')
      this.user_username = this.user.data.user_username;
      // console.log(this.user.data.user_username)
      // conseol.log(user.data)
      axios
        .post("http://localhost:3000/insert-sickbed-want", {
          user_username: this.user_username,
          sickw_name: this.sickw_name,
          sickw_amount: this.sickw_amount,
          sickw_note: this.sickw_note,
          datebetween: this.datebetween,
          village: this.village,
          province_id: this.select_province,
          districts_id: this.select_districts,
          amphure_id: this.select_amphures,
        })
        .then((res) => {
          // console.log(res)
          if (res.data.status == false) {
            const alert = async () => {
              await swal(
                "ขออภัยค่ะ",
                "โปรดตรวจสอบข้อมูลของท่านอีกครั้ง",
                "error"
              );
            };
            alert();
          } else if (res.data.status == true) {
            const alert = async () => {
              await swal(
                "ขอบคุณค่ะ",
                "บริจาคเตียงผู้ป่วยเรียบร้อยแล้ว",
                "success"
              );
              await this.$router.push("SickbedWant");
            };
            alert();
          }
        });
    },
  },
  created: function() {
    this.fetchProvince();
  },
};
</script>
