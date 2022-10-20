const STATION = require('./station')
const axios = require('axios')
const stationInfo = Object.values(STATION.stationInfo)

function convertStationName(from, to) {
    Object.values(stationInfo).map((item) => {
        if (item.name == from) {
            from = item.code
        }
        if (item.name == to) {
            to = item.code
        }
    })

    return {
        from, to
    }
}

function formatTrainData(data) {
    let ret = {}
    for (let i = 0; i < data.length; i++) {
        let row = data.split('|')
        ret = {
            trainNo: row[3], //车次
            trainNumber: row[2], //车票号
            startTime: row[8], //出发时间
            endTime: row[9], //到达时间
            fromStation: row[6], //出发站代号
            toStation: row[7], //到达站代号
            date: row[13], //出发日期
            canWebBuy: row[11], //是否能购买：Y 可以
            rw: row[23] ? row[23] : '无', //软卧
            rz: row[24] ? row[24] : '无', //软座
            yz: row[29] ? row[29] : '无',
            wz: row[26] ? row[26] : '无', //无座
            yw: row[28] ? row[28] : '无', //硬卧
            edz: row[30] ? row[30] : '无', //二等座
            ydz: row[31] ? row[31] : '无', //一等座
            swz: row[32] ? row[32] : '无', //商务座
        }
    }
    return ret
}

async function getTrainList(from, to, date) {

    const convertResult = convertStationName(from, to);


    let url = `https://kyfw.12306.cn/otn/leftTicket/query?leftTicketDTO.train_date=${date}&leftTicketDTO.from_station=${convertResult.from}&leftTicketDTO.to_station=${convertResult.to}&purpose_codes=${'ADULT'}`

    let res = await axios.get(url, {
        headers: {
            Cookie: '_uab_collina=WX:xiaosin2333; JSESSIONID=WX:xiaosin2333;',
        },
    })



    if (res.data && res.data.httpstatus === 200) {
        const {data = {}} = res.data
        const {result = []} = data

        if (result.length <= 0) {
            console.log('暂无车票信息')
            return false
        }

        const formatData = result.map((item) => {

            return formatTrainData(item)
            // this.findTrainNo(formatData, config.trainNo)
        })

        return formatData
    } else {
        console.log('查询失败！')
    }
}

module.exports={
    getTrainList
}
