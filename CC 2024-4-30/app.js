/*
def set_alarm(employed, vacation):
    """
    A function named setAlarm which receives two parameters.
    The first parameter, employed, is true whenever you are
    employed and the second parameter, vacation is true whenever
    you are on vacation.

    The function should return true if you are employed and
    not on vacation (because these are the circumstances under
    which you need to set an alarm). It should return false
    otherwise.

    Examples:

    setAlarm(true, true) -> false
    setAlarm(false, true) -> false
    setAlarm(false, false) -> false
    setAlarm(true, false) -> true

    :param employed:
    :param vacation:
    :return:
    """

    if employed and not vacation:
        return True
    return False
*/

//Answer//

function setAlarm(employed, vacation){
    if(employed && !vacation) return true;
    return false;
}