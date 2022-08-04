const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3, 3, 3, 3, 3, 3, 3, 3, 16],
        backgroundColor: ["green"],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

/*<tr>
                      <td>Личная</td>
                      <td>Станция на иркутском тракте 23</td>
                      <td>56.513883, 85.046671</td>
                      <td>9.1</td>
                      <td><div class="circle_red_status"></div></td>
                    </tr>
                    <tr>
                      <td>Личная</td>
                      <td>Станция на иркутском тракте 23</td>
                      <td>56.513883, 85.046671</td>
                      <td>9.1</td>
                      <td><div class="circle_green_status"></div></td>
                    </tr>
                    <tr>
                      <td>Общедоступная</td>
                      <td>Станция на иркутском тракте 23</td>
                      <td>56.513883, 85.046671</td>
                      <td>9.1</td>
                      <td><div class="circle_red_status"></div></td>
                    </tr>
                    <tr>
                      <td>Личная</td>
                      <td>Станция на иркутском тракте 23</td>
                      <td>56.513883, 85.046671</td>
                      <td>9.1</td>
                      <td><div class="circle_green_status"></div></td>
                    </tr>
                    <tr>
                      <td>Общедоступная</td>
                      <td>Станция на иркутском тракте 23</td>
                      <td>56.513883, 85.046671</td>
                      <td>9.1</td>
                      <td><div class="circle_green_status"></div></td>
                    </tr>
                    <tr>
                      <td>Общедоступная</td>
                      <td>Станция на иркутском тракте 23</td>
                      <td>56.513883, 85.046671</td>
                      <td>9.1</td>
                      <td><div class="circle_green_status"></div></td>
                    </tr>
                    <tr>
                      <td>Личная</td>
                      <td>Станция на иркутском тракте 23</td>
                      <td>56.513883, 85.046671</td>
                      <td>9.1</td>
                      <td><div class="circle_red_status"></div></td>
                    </tr>
                    <tr>
                      <td>Общедоступная</td>
                      <td>Станция на иркутском тракте 23</td>
                      <td>56.513883, 85.046671</td>
                      <td>9.1</td>
                      <td><div class="circle_green_status"></div></td>
                    </tr>
                    <tr>
                      <td>Личная</td>
                      <td>Станция на иркутском тракте 23</td>
                      <td>56.513883, 85.046671</td>
                      <td>9.1</td>
                      <td><div class="circle_green_status"></div></td>
                    </tr>

                    <tr>
                      <td>Общедоступная</td>
                      <td>Станция на иркутском тракте 23</td>
                      <td>56.513883, 85.046671</td>
                      <td>9.1</td>
                      <td><div class="circle_green_status"></div></td>
                    </tr>
                    <tr>
                      <td>Личная</td>
                      <td>Станция на иркутском тракте 23</td>
                      <td>56.513883, 85.046671</td>
                      <td>9.1</td>
                      <td><div class="circle_red_status"></div></td>
                    </tr>

                    <tr>
                      <td>Общедоступная</td>
                      <td>Станция на иркутском тракте 23</td>
                      <td>56.513883, 85.046671</td>
                      <td>9.1</td>
                      <td><div class="circle_green_status"></div></td>
                    </tr>*/
