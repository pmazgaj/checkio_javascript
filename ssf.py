"""
"""

__author__ = "Przemek"

elems = [1, 2, 3, 1, 3]
empty = []
# elems = [empty.append(x) for x in elems if x not in []]
# print(elems[0])

for x in elems:
    cnt = elems.count(x)
    print(cnt)
    if cnt > 1:
        empty.append(x)
    else:
        pass

print(empty)
