'use strict';

// Manually extracted from mysql-5.5.23/include/mysql_com.h
// some more info here: http://dev.mysql.com/doc/refman/5.5/en/c-api-prepared-statement-type-codes.html
exports.DECIMAL = 0x00; // aka DECIMAL (http://dev.mysql.com/doc/refman/5.0/en/precision-math-decimal-changes.html)
exports.TINY = 0x01; // aka TINYINT, 1 byte
exports.SHORT = 0x02; // aka SMALLINT, 2 bytes
exports.LONG = 0x03; // aka INT, 4 bytes
exports.FLOAT = 0x04; // aka FLOAT, 4-8 bytes
exports.DOUBLE = 0x05; // aka DOUBLE, 8 bytes
exports.NULL = 0x06; // NULL (used for prepared statements, I think)
exports.TIMESTAMP = 0x07; // aka TIMESTAMP
exports.LONGLONG = 0x08; // aka BIGINT, 8 bytes
exports.INT24 = 0x09; // aka MEDIUMINT, 3 bytes
exports.DATE = 0x0a; // aka DATE
exports.TIME = 0x0b; // aka TIME
exports.DATETIME = 0x0c; // aka DATETIME
exports.YEAR = 0x0d; // aka YEAR, 1 byte (don't ask)
exports.NEWDATE = 0x0e; // aka ?
exports.VARCHAR = 0x0f; // aka VARCHAR (?)
exports.BIT = 0x10; // aka BIT, 1-8 byte
exports.JSON = 0xf5;
exports.NEWDECIMAL = 0xf6; // aka DECIMAL
exports.ENUM = 0xf7; // aka ENUM
exports.SET = 0xf8; // aka SET
exports.TINY_BLOB = 0xf9; // aka TINYBLOB, TINYTEXT
exports.MEDIUM_BLOB = 0xfa; // aka MEDIUMBLOB, MEDIUMTEXT
exports.LONG_BLOB = 0xfb; // aka LONGBLOG, LONGTEXT
exports.BLOB = 0xfc; // aka BLOB, TEXT
exports.VAR_STRING = 0xfd; // aka VARCHAR, VARBINARY
exports.STRING = 0xfe; // aka CHAR, BINARY
exports.GEOMETRY = 0xff; // aka GEOMETRY
