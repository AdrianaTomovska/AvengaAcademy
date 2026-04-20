use [master]
go


drop database if exists [SEDCACADEMYDB]
go


create database [SEDCACADEMYDB]
go

use [SEDCACADEMYDB]
go


create table Student (
	[ID] int identity(1,1) not null,
	[FirstName] nvarchar(100) not null,
	[LastName] nvarchar(100) not null,
	[DateOfBirth] date null,
	[EnrolledDate] date null,
	[Gender] nchar(1) null,
	[NationalIDNumber] nvarchar(20),
	[StudentCardNumber] nvarchar(20)
constraint [PK_Student] primary key (ID)
)

create table Teacher (
	[ID] int identity(1,1) not null,
	[FirstName] nvarchar(100) not null,
	[LastName] nvarchar(100) not null,
	[DateOfBirth] date null,
	[AcademicRank] nvarchar(50) null,
	[HireDate] date null,
constraint [PK_Teacher] primary key (ID)
)

create table Course (
	[ID] int identity(1,1) not null,
	[Name] nvarchar(100) not null,
	[Credit] smallint not null,
	[AcademicYear] nvarchar(9) null,
	[Semester] smallint null,
constraint [PK_Course] primary key (ID)
)

create table AchievementType (
	[ID] int identity(1,1) not null,
	[Name] nvarchar(100) not null,
	[Description] nvarchar(MAX) null,
	[ParticipationRate] decimal(5,2) null,
constraint [PK_AchievementType] primary key (ID)
)

create table Grade (
	[ID] int identity(1,1) not null,
	[StudenID] int null,
	[CourseID] int null,
	[TeacherID] int null,
	[Grade] nvarchar(2) null,
	[Comment] nvarchar(MAX) null,
	[CreatedDate] date null,
constraint [PK_Grade] primary key (ID)
)

create table GradeDetails (
	[ID] int identity(1,1) not null,
	[GradeID] int null,
	[AchievementTypeID] int null,
	[AchievementMaxPoints] int null,
	[AchievementDate] date null,
constraint [PK_GradeDetails] primary key (ID)
)
