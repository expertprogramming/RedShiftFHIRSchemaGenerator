let jsonData = {
    "resourceType": "Patient",
    "identifier": [{
        "Identifier": {

        }
    }],
    "active": "< boolean > ",
    "name": [{
        "HumanName": {

        }
    }],
    "telecom": [{
        "ContactPoint": {

        }
    }],
    "gender": "<code>",
    "birthDate": "<date>",
    "deceasedBoolean": "< boolean >",
    "deceasedDateTime": "<dateTime>",
    "address": [{
        "Address": {

        }
    }],
    "maritalStatus": {
        "CodeableConcept": {

        }
    },
    "multipleBirthBoolean": "< boolean >",
    "multipleBirthInteger": "< integer > ",
    "photo": [{
        "Attachment": {

        }
    }],
    "contact": [{
        "relationship": [{
            "CodeableConcept": {

            }
        }],
        "name": {
            "HumanName": {

            }
        },
        "telecom": [{
            "ContactPoint": {

            }
        }],
        "address": {
            "Address": {

            }
        },
        "gender": "<code>",
        "organization": {
            "Reference": {

            }
        },
        "period": {
            "Period": {

            }
        }
    }],
    "communication": [{
        "language": {
            "CodeableConcept": {

            }
        },
        "preferred": "< boolean >"
    }],
    "generalPractitioner": [{
        "Reference": {

        }
    }],
    "managingOrganization": {
        "Reference": {

        }
    },
    "link": [{
        "other": {
            "Reference": {

            }
        },
        "type": "<code>"
    }]
}

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

Object.keys(jsonData).forEach(key => {
    if (getType(jsonData[key]) === 'object' || getType(jsonData[key]) === 'array') {
        console.log('Nested keys : ', key);
    } else {
        console.log("Normal Key : ", key);
    }
})