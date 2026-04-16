# overrides to s9pk.mk must precede the include statement
TARGETS := generic rocm
ARCHES := x86 arm

include s9pk.mk

.PHONY += generic rocm

generic:
	VARIANT=generic $(MAKE) arches

rocm:
	VARIANT=rocm $(MAKE) arches ARCHES=x86
