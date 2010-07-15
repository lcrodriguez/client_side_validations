// load('javascript/vendor/jquery.js')
// load('javascript/vendor/jquery.validate.js')
load('javascript/vendor/jspec.js')
load('javascript/vendor/jspec.xhr.js')
load('javascript/lib/client_side_validations.js')
load('javascript/jspec/unit/spec.helper.js')

JSpec
.exec('javascript/jspec/unit/jquery.validate.spec.js')
.exec('javascript/jspec/unit/acceptance.spec.js')
.exec('javascript/jspec/unit/confirmation.spec.js')
.exec('javascript/jspec/unit/digits.spec.js')
.exec('javascript/jspec/unit/exclusion.spec.js')
.exec('javascript/jspec/unit/format.spec.js')
.exec('javascript/jspec/unit/inclusion.spec.js')
.exec('javascript/jspec/unit/length.spec.js')
.exec('javascript/jspec/unit/required.spec.js')
.exec('javascript/jspec/unit/uniqueness.spec.js')
.run({ reporter: JSpec.reporters.Terminal })
.report()