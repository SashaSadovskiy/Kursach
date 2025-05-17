document.addEventListener('DOMContentLoaded', function () {
    fetch('../xml/infoBlock.xml')
        .then(response => response.text())
        .then(str => new DOMParser().parseFromString(str, 'text/xml'))
        .then(xml => {
            function createInfoHTML(info) {
                return `
                    <div class="imgTov"><img src="../image/${info.querySelector('pict').textContent}" alt=""></div>
                    <div class="OpisTov">
                        <h3>${info.querySelector('name').textContent}</h3>
                        <p>
                            ${info.querySelector('text').textContent}
                        </p>
                    </div>
                    <div class="StoimTov">
                        <p>${info.querySelector('cost').textContent}</p>
                    </div>
                    `
            }

            const creatine_tov1 = xml.querySelector("infoBlock[id='creatine-tov1']")
            document.getElementById('creatine-info1').innerHTML = `${createInfoHTML(creatine_tov1)}`

            const creatine_tov2 = xml.querySelector("infoBlock[id='creatine-tov2']")
            document.getElementById('creatine-info2').innerHTML = `${createInfoHTML(creatine_tov2)}`

            const creatine_tov3 = xml.querySelector("infoBlock[id='creatine-tov3']")
            document.getElementById('creatine-info3').innerHTML = `${createInfoHTML(creatine_tov3)}`

            const creatine_tov4 = xml.querySelector("infoBlock[id='creatine-tov4']")
            document.getElementById('creatine-info4').innerHTML = `${createInfoHTML(creatine_tov4)}`

            const creatine_tov5 = xml.querySelector("infoBlock[id='creatine-tov5']")
            document.getElementById('creatine-info5').innerHTML = `${createInfoHTML(creatine_tov5)}`

        })
        .catch(error => {
            console.error('Ошибка загрузки XML:', error)
            document.querySelectorAll('.container-tovar-for-page-razd').forEach(block => {
                block.innerHTML = '<p>Информация временно недоступна</p>'
            })
        })
})