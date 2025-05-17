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

            const before_tren_tov1 = xml.querySelector("infoBlock[id='suppl-before-tren1']")
            document.getElementById('before-tren-info1').innerHTML = `${createInfoHTML(before_tren_tov1)}`

            const before_tren_tov2 = xml.querySelector("infoBlock[id='suppl-before-tren2']")
            document.getElementById('before-tren-info2').innerHTML = `${createInfoHTML(before_tren_tov2)}`

            const before_tren_tov3 = xml.querySelector("infoBlock[id='suppl-before-tren3']")
            document.getElementById('before-tren-info3').innerHTML = `${createInfoHTML(before_tren_tov3)}`

            const before_tren_tov4 = xml.querySelector("infoBlock[id='suppl-before-tren4']")
            document.getElementById('before-tren-info4').innerHTML = `${createInfoHTML(before_tren_tov4)}`

            const before_tren_tov5 = xml.querySelector("infoBlock[id='suppl-before-tren5']")
            document.getElementById('before-tren-info5').innerHTML = `${createInfoHTML(before_tren_tov5)}`

        })
        .catch(error => {
            console.error('Ошибка загрузки XML:', error)
            document.querySelectorAll('.container-tovar-for-page-razd').forEach(block => {
                block.innerHTML = '<p>Информация временно недоступна</p>'
            })
        })
})