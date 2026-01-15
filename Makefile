ALL_TARGETS := generic rocm
ALL_ARCHES := x86 arm

include s9pk.mk

.PHONY: generic rocm

generic:
	$(MAKE) all_arches VARIANT=generic

rocm:
	ROCM=1 $(MAKE) all_arches VARIANT=rocm ALL_ARCHES=x86_64

