import React, {Component} from 'react';
// import EmbedReport from './components/EmbedReport/EmbedReport'
import PowerbiEmbedded from 'react-powerbi'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PowerbiEmbedded
          id={`${'b4cac543-65c3-4a1a-b0dd-dc47f8acefd9'}`}
          embedUrl={`${'https://app.powerbi.com/reportEmbed?reportId=b4cac543-65c3-4a1a-b0dd-dc47f8acefd9&groupId=be8908da-da25-452e-b220-163f52476cdd'}`}
          accessToken={`${'H4sIAAAAAAAEAB2Wta7FCoIE_-WlHslMI01gto-ZITMzs1f773t38o6qper-n3-s9B3mtPjn3__gMMbATkWKB6qqh0w0Fl9-fETUTfKFmwFZh7u5gJEGn5QtZbMYs6BJ_ddoT8m106VKRHVxtUdQyAJiu8umadmdNBe98F3HijCb4e6fXEg516wI2W0eVBtJUR_avOh84IHnVlwsvoQqvnIB0wtiG7V0PL0lJMaA0PC80S8rGyqemFPaf6zFj89Rw1Kcn7_HCcdYlSZKFJsx1bom7DTy0sk6bTZkXt2OTa4IEDARlBplvur0NCx6Mg4HWjkviJM7XDzssusDZCFi5_D3VF7qXA01PjFBlvkBLL8ebvqwcvKOql6fvYtxGUEHs1uWCetH47DNzZroRKTj58PuOQvvZPVrl0O4EqkdXo9lrppC4wJeAMF2bVzss1lXub0PaQqBCS51kjgt1XLSqYq_xFMtvXqV328744HGQ0EcLQqB18QpHYEiIsf1Ik1u9TejBdD1MtbZJEM-rG96JxNuHxmV91uj0p0sfWygMKwSHyzhMaeQREr6pY795oIOS0hFNfcSxR5sDeFxemW2vn9MKRqgVQOIGNNxX8D-0KlDHPoszhEY_trlBnEE6mTtp0XPzI6DrElinwNknFAzg8B1DZ4g_GCyUX5Sk74XwYKD0-vzjR-quWrUrnnohwrgzCjYki8eq0b--t54cuvN4UzeQT9qeaQtk2wQOLLg5_Unh0Fikl0eJ3T5KnlWVcpviV2LKk9I1Z_2lOdnEYWDx30JNv_gPnAbnnrVNbLTd1M5i4I4xUk8wJG-n0gw3JlyElelNdr7nymeBDzkXokvnXdDq0Vk3iJbxNQ8GW976FjP9YiAtovemuXiPn30WVuJPKSS7jTEXTbVmAa3S4QOKTHUm8tLCleLSYegHubOsbhS654-UbKmMB54K6jggwKkBkuo0ZcUeyErDnIR8SJWBVRSnS1pDIno0S_o7UGRysqPpAWQ11HJq7zmxmXOX0dV_aouVa24TMjpYiRDHV3Z11CE3x_1yBswH-X0EJ4tK78wSqSdDjF-F2oHJgG5dOW4ahwiiERFzpHCse7d4AQoL72593wETWvwd9UcnPsNqS1W5gBnPvQgkoDgs-4RcADvGOeKXutZKcSIBedhcvXqxFFkTxxldaTYmTzl0PKmwSqctkbaK60U_6q8rqb6Bv2QJVnzoHVJ8R31H--2h-nWhhikzpxBqtUcvOaC-w63u3U9vQRzfCRudg7zQmHckxUOS4yyu40vIc6r3MiSLNlyCT1w5yEqtS7fGs_ATKHX9BW30mJIfdpvfCJaBCFttWHi9rrPJeAJ0DVnshzFil-2O8JcX3NygKdg2AvL2BSFpQR8gHomgfdURbRflUbDYfWKlIHc3JhtLbli--LH1AiApIWlWYjyBWOE4JmvwKRdSut-6L4ZCKyozGsd9bJUbORzJGh578BJnc9gC6dsJpH97BBBjNyHRIf1NpBNYw1VmEhMd94OoNODHXCb935tsEkozR05Y-hWrsWfby-ZWk9K8dmeIqVxEe251uTpvoeUamR7r69fzUUqB7TTftluxaVMfsjy-414K7OTOgCrb0oataPj9ADXIIg1bzuSlAcwN-lKqC9lYgAkgksLOw0DPaonDH5bEaUqEV-0RMU8SS2HFoPqZR-jJ0UZrVckam4FqZ3OSKUMXaWOFB6aA5rBZAUXW2I2nskXlUDE1-deQtLNjn1y3dwwxZGeEh0fgMr-tQX1diKxP3ZHCQBpMTBTiStJf_kSwCysDHZ8pI3wKTtIcmgSx49oK5xBNv_Uh2inR6Lp-rJMBcr4Lk6_sBocFWZ3MX6Bx1F_ldvYbHkza1P36w6su502tson0JkMzRVsBqiWciNAT3_EZdLOoqTLsArdc8s5gr0wwaOHNtxWsMxoyhaoG_7zHbrH_haRs8kePTcyucffUID37lRb0LkEOntcS7xZlISTGIQhRngMJf6J3kSvkccVQ-1n8azdyH0aMSvHu-2vg-gorqA5Y2dSg2ImRpftlPwSQrBjcIgszVCmozBxLuF4w2p7Hv3Gnfce4QYut841cqCNOLEketMu4akJHf0xeoiku0Tft__oGS9VqhrmaE-nwNSlGBlDWB7jHHGiA1xdazk5iweCuq7_559__cNt73LMavn-XYeZvCH4iVzFZeGBZIzhXsuDwA2y6TXeRYpswaOl0fChUWNpvFa0pDGcCRSaHmDKLB6a13wrCyOlWwiq3Duve9laLrrFH3GNINYyR5oXnRSku9jUPkvH52eJPrK9ZFOIhcWdOImdztLU0iBeuLi5XEcW-6Gb0PAWsWzfNRoMSyQsfsJsMJf9eIRDMGxlWWIG-23sKmPKn49lieYKmxHlQPGTRcmulOJOOHELiJ5DP0_viDkiCgYDk2Zz6hgpHUslyvybYEPRiSSr0t1v0RxltIUrlijqBgsew8TDkYX6GuQ0DUPMC3HzqhhOYkbq1MDLbi1fieZjeynaO24yKXo9mE7f7f_8F_O7NOWmBH-Uf0TS8b6qMVoqGolV8aM03fV_U25bT-lxbuVfbEghLoljj6KhHhpriZ28uqq5GydLmjp6M5dhqDgaWEFxmMKZdNXn9jYo2erMHZTAZVFrtka7Uc7ca041-oQiqmqsFirOlXcBt-d24KIiYdhRrEeGLRwS6mTArx8Og62Xl9N7sUaRiAcmmH9il7XjZ8_EtZZ-AWwPu0sz5g3HENz2SqALXzm8C0PKaCplCELb8IKkHwala3ymJVpeCs44kC6as2CCfxYy8yMVoAG1b5PZ3wAZbbTg2QZ_LLS-WwAOkUJZvvjvAPyO9ZFhcvajUrnr_g2MqfAqfbCsMPWkWkWCW2-te8lg7PeiFTFx8iEJMyBqMZRm2T5oevrxJJJSH_X9fxn_-385hZdELgsAAA=='}`}
          filterPaneEnabled={false}
          navContentPaneEnabled={false}
          />
      </div>
    );
  }
}

export default App;