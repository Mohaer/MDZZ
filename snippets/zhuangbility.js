// Boolean
!!'fuck'

// ParseInt
~~3.14159 === parseInt(3.14159)

// Hex
(~~(Math.random()*((1<<24)-1))).toString(16)+'00000').substring(0,7)

// <<
parseInt('1000000000000000000000000', 2) === (1 << 24)
Math.pow(2,24) === (1 << 24)
