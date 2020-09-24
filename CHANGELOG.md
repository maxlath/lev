# CHANGELOG
*versions follow [SemVer](http://semver.org)*

## 7.2.0 - 2020-09-24
* Add [`--prefix`](https://github.com/maxlath/lev2#--prefix) options
* Replacing `--start` and `--end` documentation by `--gt`, `--gte`, `--lt`, `--lte`, as more explicit and consistent with LevelUp.

## 7.1.0 - 2020-03-23
* Make `--all` implicit when options that suppose a stream are used (typically range commands: `--gt`, `--gte`, `--lt`, `--lte`)

## 7.0.0 - 2019-12-22
* [Update `level-party` to `v4.0.0`](https://github.com/Level/party/blob/master/CHANGELOG.md#400---2019-12-08)

## 6.1.0 - 2019-11-08
* allow to use [`--keys`](https://github.com/maxlath/lev2#--keys) and [`--del`](https://github.com/maxlath/lev2#--del-key) in combination to generate a delete stream

## 6.0.0 - 2019-11-08
* BREAKING CHANGE: when called without arguments, the command displays the help menu instead of opening a REPL in the current folder

## 5.0.0 - 2018-11-20
* BREAKING CHANGE: removing support for tabulated output in the CLI, thus also removing the `--line` CLI option as this is now the default behavior
* BREAKING CHANGE: renaming CLI option `--length` -> `--count`
