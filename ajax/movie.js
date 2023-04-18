// 오늘 날짜 확인 - 1 : 어제날짜를 화면에 보여주기
const txtYear = document.getElementById("txtYear");
const selMon = document.getElementById("selMon");
const selDay = document.getElementById("selDay");
const msg = document.getElementById("msg");
const detail = document.querySelector(".box3");

function init() {
  let today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate() - 1;

  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = date < 10 ? "0" + date : date;
}

init();

function show(movieCd) {
  let url =
    "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=";
  url += movieCd;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("데이터가 잘못되었습니다");
      }
      return response.json();
    })
    .then((data) => {
      let movieInfo = data.movieInfoResult.movieInfo;
      console.log(movieInfo);
      let str = "<ul>";
      str += "<li>영화 제목 : " + movieInfo.movieNm + "</li>";
      str += "<li>영문 제목 : " + movieInfo.movieNmEn + "</li>";
      str += "<li>상영 시간 : " + movieInfo.showTm + "분</li>";
      str += "<li>감독 : ";
      if (movieInfo.directors.length == 0) {
        str += "없음";
      } else {
        movieInfo.directors.forEach((element, idx) => {
          str += element.peopleNm;
          if (idx != movieInfo.directors.length - 1) {
            str += ", ";
          }
        });
      }
      str += "</li>";

      const length = movieInfo.actors.length;
      let peopleNm = "";
      if (length === 0) {
        peopleNm += "없음";
      } else {
        movieInfo.actors.forEach((actor, idx) => {
          if (idx == length - 1) {
            peopleNm += actor.peopleNm;
          } else {
            peopleNm += actor.peopleNm + ", ";
          }
        });
      }
      str += "<li>배우 목록 : " + peopleNm + "</li></ul>";
      detail.innerHTML = str;
    })
    .catch((err) => console.log(err));
}

document.querySelector("#btn1").addEventListener("click", () => {
  let url =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=";
  let date = txtYear.value + selMon.value + selDay.value;
  url += date;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("데이터가 올바르지 않습니다");
      }
      return response.json();
    })
    .then((data) => {
      let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      let str = "";
      dailyBoxOfficeList.forEach((element) => {
        str += element.rank + " 위";
        let rankInten = element.rankInten;
        if (rankInten > 0) {
          rankInten = "▲" + rankInten;
        } else if (rankInten < 0) {
          rankInten = "▼" + rankInten;
        } else {
          rankInten = "-";
        }
        str += "(" + rankInten + ") : ";
        str +=
          "<a href='#' onclick='javascript:show(" +
          element.movieCd +
          ")'>" +
          element.movieNm +
          "</a></br>";
      });
      msg.innerHTML = str;
    })
    .catch((err) => {
      msg.innerHTML = err;
    });
});
