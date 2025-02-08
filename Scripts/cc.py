import dd
def printt(object,tabLevel=0) -> None:
    if type(object)==str:
        print('---|'*(tabLevel-1),'children',object)
        return 
    for x in object:
        if x == 'children':
            if type(object[x]) == str:
                print('---|'*tabLevel,'children',object[x])
            else:
                for y in object[x]:
                    printt(y,tabLevel=tabLevel+1)
        else:
            print('---|'*tabLevel,x,object[x])
printt(dd.page)