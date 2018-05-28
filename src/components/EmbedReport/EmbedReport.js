import React, {Component} from 'react';
import {Report} from 'react-powerbi';

class EmbedReport extends Component {
  onEmbedded(embed) {
    console.log(`Report embedded: `, embed, this);
  }

  state = {
    embedConfig: {
      id: 'b4cac543-65c3-4a1a-b0dd-dc47f8acefd9',
      accessToken:
        'H4sIAAAAAAAEAC2Wxw7s2A1E_-VtZUBZahmYhXLOWTvlnNVKhv_d7cHsSRCse1mn_vPHSp9hTos___6D53aP0MmVFozlYzi8gEL6xsYXbwDVwehKymipg8OYBA9218cJARuJ--itw9-LUQ2r51MunhaWNjLL-3THBjRgFgk0jBmuUqvgTUnJDqCHYX6FFn8bRGnxTbNtd6JREDmhIeJYr3z8nVcLfCj069NjaygWOuQHnu6uNK-rHLKYgA66ZwA8ElQjXJuyhhgpOVUqeI6NkzYUZskGq6_xXy4LTDF4XfyjoRV4Q7J1HAauuxAGVCw68vc1qMUqLrcIiepcLIpE0O7Sa61c28eWw5WAQUx-2pbvTgBkK3paImnR-gNXrYTmSVMVfySD8fdwqiQvqymqVYZtT0wCfiMfc6LCRa1UscVhhFX5Ex99BpZCEdKMV6pG1MPtZGUvZVcNkKGtypFv955desfbaFOVVHuWNUP3APHZFsBfhz0Nwt83ObR5UFQ5YvoYRnOqR7_fI1EG_BI21Bix4Yz-5u9NsJk8WtdEzweikaXVi77iRgu-R9KpBHUsDaMRuWvCwIIsX5OkRC9KkWJRuPrUQUESO0OJO5KpPJ636TWITqFn5imfmlDASCgX65Nqv69xGmTUILjO9RPoKekXZoPyBmHhsEv_iQw1HGGFea5BT_p6euILSKIQf3asysheoZjPU3iYI-EDtAXRKMtjeET4kn5AakX70PYBduQl1y118BtOn7097dztSMSoRNkUZTKg7TXNWDB5EUK1-rygSq9EzMMiN7v5qmmU5YOyA9UgYArsQ2k70OhEW91BICwbZwYZpPk6ujtMPeeTwpK2Bj4lR4gVuYRjQocBVmb-oY4W5sHjfgOTFmLAx0MSEkbK6_oSESx6W7znoh0TYXW2JaYS-LqrBQpX0E7SbYcbjXM5xTzLb30uR93aNtUcYvrSKsMvEL8NUb9QMZR3OxvkJfd4Jzpx9L6j73Jtx79zuKE0MIH50ddQ5LqjGJ8r2FAOjiduTymhkizxl1NF_MNyX1Pd8fsVVB-i2Qa2LW9L1EVrMcWUiyvYP-Mnf3T_MiUsZepL7PBB6mLpeYnsqOEO6LskLQuxMQFKXcXeLWJWtMXLvThHLNwrTvctilGcH7pXc5LWv76grVo80jPdmu1Dh1pa8iWMUDIQINyv0eHSEjD2muwLwY2CILGelj-sdjlAkd7YOv5NfFapKwXWgTtc_dobwvSTGyXUdNInNh0CQXaedNhPHgIiYj66fn487bsVo9arsnBBI4Kc5jEYtr-QGeOCDpnU5bAhCd7K1UYDbGIvouzQOXYdIIjyxE57GOBlwRvH0x3l71Eg7SGRDi0DsJ5sqhsflFQPQ_TidX5cM_M7xdj9gpgZR5cr9Rs4WeJh7lxFgkaLhV8LLopYI1jNZ4BlLULEh0Cdo4Xsbav9zBijL6s0kSmTJ1YPnZEeriR5i1YEMyJXBz1bkesPQu60zJiGTZtxzQIaUn4DNIpe2VuBwgZY6-ixs_fah5rjHCmuSrmdwZzoI9HiaRSdNyJZ12UIXzca7lJpc8Ft06ccve_Rsn0s7PPGuTgXE-seA8Ab8RnHTu_zWRpxbRm0V0E9kinyjyvdIz1j896AMcEId2iOcSP6rWRyvUqXYGrHd9F21Os8ZwgjnlzBIyg-a1c-Zw0F_iW1EV-Crf49EV1eH4SXJv1i-EpZfY7IJPAn0PWzMTj6lt_ofdzHsDwyBRWNg7KcZDyC29zBXC9O-j4hSqDl2XFiZqZ5T_Kqfg_6lgyeuvvh0dARzshYMRPIo1t3lx-RdM9hWpvwr6UleJWQMqi9hEKoObfHF-7FmcTDRR4SroLZSr7D01XpZJ3guU04S3_L1gaf7cxAgSkem-y0kR9w6JTIjc5c_Ef5Fnx_AHFV1Fz0IvvSSRCwyd30NbsoVy4-sbEs51xwpklbSYJYVb9tR6SNKTIo6joz2v6sHWtMp-6obFvuXP3I7iJsrUyr-aEuiVYeOtgSArY2RNazMScBVLvtvb5W5g-Cq_KJsyoWUUV3YPPF4S3rbW8-7mn6Nsvy-XEAZuYgoBM2BmG2kTmc2uA7AvVaWwesBIVtkLS7LT7jvTdbe7UUxQTeBmoEHQO7FlnXc8cZSyMvdqJ5_ddff_71h92e5ZjV8vnFhGYY-_7dHDxSkbAekO92m5Pl7x7hrLM92z79IqkYci7poyGUZ6hXWIamaYuZ-bxJq8vvNp42eNy1S-X0h7s-G8Rd3HAM96V09IMLtPOLPMJg2-dvMfug6494rV2c7YaA1x1d_plWRxlAUSJFIqPEsAwSrrjVXBHISi8doIn4x1zaCBINjFTmjpSTG6zdQKUwCJETFgllVsyA2JdZ5iSS253eNCFR_iisltVuqHRXoFvLqruOIf5RKlxFrPJQWMmhxxFB2N2dwyseYMGrvBTgfLiSglBK-kpaCKX5OL6fuOYA4QOtvvBtccOuBNWw95UmoT6q0JPd-LBkUMisv_Ra0Mrzj8zP0pSbHPxUpgylmvd2pYnZoU7Y0NRJoOm_q9y2ntLju5W_Mu3u9XkFBaBQrIJot0pLf3B5vcZXeU6nbXn0ZnYYfgsRWIDExBcvccJ8HIHjkDb72H2M9f1F358CZS8UYHa_I6eVY1eZjrtzjZ6gYSLzRxxwStR0nrLi4ZRcSgWvOUs2SinEV5VU-Fp9ilug1b51sezmMAz2AV-InqfwDLRYE2--q0jbspyqL95jB5Jnoa79Yf4UYWiLCs7gaBl0-8UVc6DKxR_sVIlk0_NpOJryAVvg0jrSX1DdYGV7_ZFhs1U3PGGsjPv0Lm9w9TzAjDUZpqCXrd3Zfhl0prI9wtFiMIGu6KWJ_SWkEmAKjLozTPyUE028ySBAP8ceSvooK_bjFLw6_f8x_vs_GgY2_xoLAAA=,s',
      embedUrl:
        'https://app.powerbi.com/reportEmbed?reportId=b4cac543-65c3-4a1a-b0dd-dc47f8acefd9&groupId=be8908da-da25-452e-b220-163f52476cdd',
    },
  };
  render() {
    return (
      <div>
        <h1>react-powerbi demo</h1>

        <Report
          id={this.state.embedConfig.id}
          embedUrl={this.state.embedConfig.embedUrl}
          accessToken={this.state.embedConfig.accessToken}
          filterPaneEnabled={true}
          navContentPaneEnabled={false}
          onEmbedded={this.onEmbedded}
        />
      </div>
    );
  }
}

export default EmbedReport