report-transfer
===============

报告数据迁移

[![NPM](https://nodei.co/npm/report-transfer.png)](https://nodei.co/npm/report-transfer/)

[![Build Status](https://travis-ci.org/dmccer/report-transfer.svg)](https://travis-ci.org/dmccer/report-transfer)
[![Coverage Status](https://coveralls.io/repos/dmccer/report-transfer/badge.png?branch=master)](https://coveralls.io/r/dmccer/report-transfer?branch=master)

## Usage

```bash
gltrs ./test/source ./test/target ./order.json
```

```javascript
// POST /report/transfer
// Body { "order_id": "", "car_id": "" }
// Response
{
    "code": 200,
    "data": {
        "report": "",
        "photo": "",
        "order": ""
    }
}
```