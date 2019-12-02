# vuelidate-test-problem
To reproduce the problem run the test and you will see that `generalInformationForm.vm.$v.$invalid` is true when we would expect it to be false as the form is valid. Below is the output is of `generalInformationForm.vm.$v` and as you can see all the child properties are showing `"$invalid": false` but the top level is showing `"$invalid": true`.

```javascript
{
  "general_informations_form": {
    "first_name": {
      "required": true,
      "$model": "first name",
      "$invalid": false,
      "$dirty": false,
      "$anyDirty": false,
      "$error": false,
      "$anyError": false,
      "$pending": false,
      "$params": {
        "required": {
          "type": "required"
        }
      }
    },
    "last_name": {
      "required": true,
      "$model": "last name",
      "$invalid": false,
      "$dirty": false,
      "$anyDirty": false,
      "$error": false,
      "$anyError": false,
      "$pending": false,
      "$params": {
        "required": {
          "type": "required"
        }
      }
    },
    "maiden_name": {
      "required": true,
      "$model": "madien name",
      "$invalid": false,
      "$dirty": false,
      "$anyDirty": false,
      "$error": false,
      "$anyError": false,
      "$pending": false,
      "$params": {
        "required": {
          "type": "required"
        }
      }
    },
    "email": {
      "required": true,
      "email": true,
      "$model": "first@name.com",
      "$invalid": false,
      "$dirty": false,
      "$anyDirty": false,
      "$error": false,
      "$anyError": false,
      "$pending": false,
      "$params": {
        "required": {
          "type": "required"
        },
        "email": {
          "type": "email"
        }
      }
    },
    "social_security": {
      "required": true,
      "numeric": true,
      "minLength": true,
      "maxLength": true,
      "$model": "4443322222",
      "$invalid": false,
      "$dirty": false,
      "$anyDirty": false,
      "$error": false,
      "$anyError": false,
      "$pending": false,
      "$params": {
        "required": {
          "type": "required"
        },
        "numeric": {
          "type": "numeric"
        },
        "minLength": {
          "type": "minLength",
          "min": 10
        },
        "maxLength": {
          "type": "maxLength",
          "max": 10
        }
      }
    },
    "confirm_social_security": {
      "sameAsSocialSecurity": true,
      "maxLength": true,
      "$model": "4443322222",
      "$invalid": false,
      "$dirty": false,
      "$anyDirty": false,
      "$error": false,
      "$anyError": false,
      "$pending": false,
      "$params": {
        "sameAsSocialSecurity": {
          "type": "sameAs",
          "eq": "social_security"
        },
        "maxLength": {
          "type": "maxLength",
          "max": 10
        }
      }
    },
    "date_of_birth": {
      "required": true,
      "$model": "2016-10-15T05:00:00.000Z",
      "$invalid": false,
      "$dirty": false,
      "$anyDirty": false,
      "$error": false,
      "$anyError": false,
      "$pending": false,
      "$params": {
        "required": {
          "type": "required"
        }
      }
    },
    "$model": {
      "first_name": "first name",
      "last_name": "last name",
      "maiden_name": "madien name",
      "email": "first@name.com",
      "social_security": "4443322222",
      "confirm_social_security": "4443322222",
      "date_of_birth": "2016-10-15T05:00:00.000Z",
      "prefix": "",
      "suffix": "",
      "prefixList": [
        "Mr",
        "Mrs",
        "Ms"
      ],
      "suffixList": [
        "I",
        "II",
        "III",
        "IV"
      ]
    },
    "$invalid": false,
    "$dirty": false,
    "$anyDirty": false,
    "$error": false,
    "$anyError": false,
    "$pending": false,
    "$params": {
      "first_name": null,
      "last_name": null,
      "maiden_name": null,
      "email": null,
      "social_security": null,
      "confirm_social_security": null,
      "date_of_birth": null
    }
  },
  "$model": null,
  "$invalid": true,
  "$dirty": false,
  "$anyDirty": false,
  "$error": false,
  "$anyError": false,
  "$pending": false,
  "$params": {
    "general_informations_form": null
  }
}
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
