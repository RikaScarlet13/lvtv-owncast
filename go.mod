module github.com/owncast/owncast

go 1.22

require (
	github.com/aws/aws-sdk-go v1.53.5
	github.com/go-fed/activity v1.0.1-0.20210803212804-d866ba75dd0f
	github.com/go-fed/httpsig v1.1.0
	github.com/go-ole/go-ole v1.2.6 // indirect
	github.com/gorilla/websocket v1.5.1
	github.com/grafov/m3u8 v0.12.0
	github.com/lestrrat-go/file-rotatelogs v2.4.0+incompatible
	github.com/mattn/go-sqlite3 v1.14.22
	github.com/microcosm-cc/bluemonday v1.0.26
	github.com/nareix/joy5 v0.0.0-20210317075623-2c912ca30590
	github.com/oschwald/geoip2-golang v1.9.0
	github.com/rifflock/lfshook v0.0.0-20180920164130-b9218ef580f5
	github.com/schollz/sqlite3dump v1.3.1
	github.com/sirupsen/logrus v1.9.3
	github.com/teris-io/shortid v0.0.0-20220617161101-71ec9f2aa569
	github.com/yuin/goldmark v1.7.1
	golang.org/x/mod v0.17.0
	golang.org/x/time v0.5.0
)

require (
	github.com/jonboulle/clockwork v0.2.2 // indirect
	github.com/lestrrat-go/strftime v1.0.4 // indirect
	github.com/mvdan/xurls v1.1.0 // indirect
	github.com/pkg/errors v0.9.1
	github.com/tklauser/go-sysconf v0.3.12 // indirect
	github.com/tklauser/numcpus v0.6.1 // indirect
	github.com/yusufpapurcu/wmi v1.2.4 // indirect
	golang.org/x/crypto v0.23.0 // indirect
	golang.org/x/net v0.25.0
	golang.org/x/sys v0.20.0 // indirect
)

require github.com/prometheus/client_golang v1.19.1

require (
	github.com/beorn7/perks v1.0.1 // indirect
	github.com/cespare/xxhash/v2 v2.2.0 // indirect
	github.com/klauspost/compress v1.16.7 // indirect
	github.com/lufia/plan9stats v0.0.0-20211012122336-39d0f177ccd0 // indirect
	github.com/power-devops/perfstat v0.0.0-20210106213030-5aafc221ea8c // indirect
	github.com/prometheus/client_model v0.5.0 // indirect
	github.com/prometheus/common v0.48.0 // indirect
	github.com/prometheus/procfs v0.12.0 // indirect
	golang.org/x/text v0.15.0 // indirect
	google.golang.org/protobuf v1.33.0 // indirect
)

require (
	github.com/nakabonne/tstorage v0.3.6
	github.com/shirou/gopsutil/v3 v3.24.4
)

require github.com/SherClockHolmes/webpush-go v1.3.0

require (
	github.com/andybalholm/brotli v1.0.5 // indirect
	github.com/apapsch/go-jsonmerge/v2 v2.0.0 // indirect
	github.com/aymerick/douceur v0.2.0 // indirect
	github.com/davecgh/go-spew v1.1.1 // indirect
	github.com/go-test/deep v1.0.4 // indirect
	github.com/golang-jwt/jwt v3.2.2+incompatible // indirect
	github.com/google/uuid v1.5.0 // indirect
	github.com/gorilla/css v1.0.0 // indirect
	github.com/jmespath/go-jmespath v0.4.0 // indirect
	github.com/oschwald/maxminddb-golang v1.11.0 // indirect
	github.com/pmezard/go-difflib v1.0.0 // indirect
	github.com/shoenig/go-m1cpu v0.1.6 // indirect
	golang.org/x/sync v0.3.0 // indirect
	gopkg.in/yaml.v3 v3.0.1 // indirect
)

require (
	github.com/CAFxX/httpcompression v0.0.9
	github.com/TwiN/go-away v1.6.13
	github.com/andybalholm/cascadia v1.3.2
	github.com/go-chi/chi/v5 v5.0.12
	github.com/jellydator/ttlcache/v3 v3.2.0
	github.com/mssola/user_agent v0.6.0
	github.com/oapi-codegen/runtime v1.1.1
	github.com/stretchr/testify v1.9.0
	github.com/yuin/goldmark-emoji v1.0.2
	gopkg.in/evanphx/json-patch.v5 v5.9.0
	mvdan.cc/xurls v1.1.0
)

replace github.com/go-fed/activity => github.com/owncast/activity v1.0.1-0.20211229051252-7821289d4026
