# set FLASK_APP=api.py
# $env:FLASK_APP = "api.py"
# python -m flask run


import time
from flask import Flask, request
from flask_cors import CORS
from datetime import datetime, timedelta
import json

app = Flask(__name__)
CORS(app)


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/table')
def get_table():
    return {'responses':
        [
            {'type': 'table',
             'data': {'headers': ['pk', 'name', 'status', 'time_check', 'version'],
                      'rows': [{'pk': 1,
                                'name': 'aa',
                                'status': 'aamoshe',
                                'time_check': str(datetime.utcnow()-timedelta(days=2)),
                                'version': '1.2'
                                },
                               {'pk': 2,
                                'name': 'bb_bla2',
                                'status': 'bbmoshe2',
                                'time_check': str(datetime.utcnow()),
                                'version': '1.3'
                                }, ]
                      }
             },
        ],
        'had_error': False,
        'response_type': 'some_type'
    }


@app.route('/C')
def get_table2():
    return {'responses':
        [
            {'type': 'table',
             'data': {'headers': ['pk', 'c', 'cc', 'time'],
                      'rows': [{'pk': 1,
                                'c': 'aa',
                                'cc': 'aamoshe',
                                'time': datetime.utcnow()
                                },
                               {'pk': 2,
                                'c': 'bb_bla2',
                                'cc': 'bbmoshe2',
                                'time': datetime.utcnow()
                                }, ]
                      }
             },
        ],
        'had_error': False,
        'response_type': 'some_type'
    }


@app.route('/P')
def get_table3():
    return {'responses':
        [
            {'type': 'table',
             'data': {'headers': ['pk', 'P', 'PPP', 'time'],
                      'rows': [{'pk': 1,
                                'P': 'aa',
                                'PPP': 'aamoshe',
                                'time': datetime.utcnow()
                                },
                               {'pk': 2,
                                'P': 'bb_bla2',
                                'PPP': 'bbmoshe2',
                                'time': datetime.utcnow()
                                }, ]
                      }
             },
        ],
        'had_error': False,
        'response_type': 'some_type'
    }


# @app.route('/result', methods = ['POST'])
# def result():
#     player_id = request.json
#     if player_id:
#        data = get_player(player_id)
#        name = str(data['name'][0])
#        return jsonify(name)
#    return "No player information is given"

@app.route('/PK', methods=['POST', 'GET'])
def get_t2():
    request_id = request.data.decode()
    print(request_id)
    if request_id:
        return {'responses':
                    [{'type': 'message', 'data': 'returned 1 results'},
                     {'type': 'message', 'data': 'table title1'},
                     {'type': 'table',
                      'data': {'headers': ['key', 'value'],
                               'rows': [{'key': request_id,
                                         'value': 'tt',
                                         },
                                        {'key': 'bla2',
                                         'value': 'aa2',
                                         },
                                        {'key': 'bla3',
                                         'value': 'aa3',
                                         },
                                        {'key': 'bla4',
                                         'value': 'aa4',
                                         },
                                        ]
                               }
                      },

                     ],
                'had_error': False,
                'response_type': 'some_type'
                }

    return {'responses':
                [{'type': 'message', 'data': 'returned 1 results'},
                 {'type': 'message', 'data': 'table title1'},
                 {'type': 'table',
                  'data': {'headers': ['key', 'value'],
                           'rows': [{
                               'key': 'blarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
                               'value': 'aa',
                           },
                               {'key': 'bla2',
                                'value': 'aa2',
                                },
                               {'key': 'bla3',
                                'value': 'aa3',
                                },
                               {'key': 'bla4',
                                'value': 'aa4',
                                },
                               {'key': 'bla5',
                                'value': 'aa5',
                                },
                               {'key': 'bla6',
                                'value': 'aa6',
                                },
                               {'key': 'bla7',
                                'value': 'aa7',
                                },
                               {'key': 'bla8',
                                'value': 'aa8',
                                },
                               {'key': 'bla9',
                                'value': 'aa9',
                                },
                               {'key': 'bla10',
                                'value': 'aa10',
                                },
                               {'key': 'bla11',
                                'value': 'aa11',
                                },
                               {'key': 'bla12',
                                'value': 'aa12',
                                },
                               {'key': 'bla13',
                                'value': 'aa13',
                                },
                               {'key': 'bla14',
                                'value': 'aa14',
                                },
                               {'key': 'bla15',
                                'value': 'aa15',
                                },
                               {'key': 'bla16',
                                'value': 'aa16',
                                },
                               {'key': 'bla17',
                                'value': 'aa17',
                                },
                           ]
                           }
                  },
                 {'type': 'message', 'data': 'table title2'},
                 {'type': 'table',
                  'data': {'headers': ['pk', 'name', 'status', 'stam'],
                           'rows': [{'pk': 1,
                                     'name': 'aa',
                                     'status': 'aamoshe',
                                     'stam': 'aastamv'
                                     },
                                    {'pk': 2,
                                     'name': 'bb_bla2',
                                     'status': 'bbmoshe2',
                                     'stam': 'bbstamv2'
                                     }, ]
                           }
                  },
                 {'type': 'message', 'data': 'table title3'},
                 {'type': 'table',
                  'data': {'headers': ['pk2', 'name2', 'status2', 'date'],
                           'rows': [{'pk2': 1,
                                     'name2': 'bla',
                                     'status3': 'moshe',
                                     'date': datetime.now()
                                     },
                                    {'pk2': 2,
                                     'name2': 'bla2',
                                     'status2': 'moshe2',
                                     'date': datetime.now()
                                     }, ]
                           }
                  },
                 ],
            'had_error': False,
            'response_type': 'some_type'
            }


@app.route('/TPage', methods=['POST', 'GET'])
def get_t():
    request_id = request.data.decode()
    print(request_id)
    if request_id:
        return {'responses':
                    [{'type': 'message', 'data': 'returned 1 results'},
                     {'type': 'message', 'data': 'table title1'},
                     {'type': 'table',
                      'data': {'headers': ['key', 'value'],
                               'rows': [{'key': request_id,
                                         'value': 'tt',
                                         },
                                        {'key': 'bla2',
                                         'value': 'aa2',
                                         },
                                        {'key': 'bla3',
                                         'value': 'aa3',
                                         },
                                        {'key': 'bla4',
                                         'value': 'aa4',
                                         },
                                        ]
                               }
                      },

                     ],
                'had_error': False,
                'response_type': 'some_type'
                }
    return {'responses':
                [{'type': 'message', 'data': 'returned 1 results'},
                 {'type': 'message', 'data': 'table title1'},
                 {'type': 'table',
                  'data': {'headers': ['key', 'value'],
                           'rows': [{
                               'key': 'blarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
                               'value': 'aa',
                           },
                               {'key': 'bla2',
                                'value': 'aa2',
                                },
                               {'key': 'bla3',
                                'value': 'aa3',
                                },
                               {'key': 'bla4',
                                'value': 'aa4',
                                },
                               {'key': 'bla5',
                                'value': 'aa5',
                                },
                               {'key': 'bla6',
                                'value': 'aa6',
                                },
                               {'key': 'bla7',
                                'value': 'aa7',
                                },
                               {'key': 'bla8',
                                'value': 'aa8',
                                },
                               {'key': 'bla9',
                                'value': 'aa9',
                                },
                               {'key': 'bla10',
                                'value': 'aa10',
                                },
                               {'key': 'bla11',
                                'value': 'aa11',
                                },
                               {'key': 'bla12',
                                'value': 'aa12',
                                },
                               {'key': 'bla13',
                                'value': 'aa13',
                                },
                               {'key': 'bla14',
                                'value': 'aa14',
                                },
                               {'key': 'bla15',
                                'value': 'aa15',
                                },
                               {'key': 'bla16',
                                'value': 'aa16',
                                },
                               {'key': 'bla17',
                                'value': 'aa17',
                                },
                           ]
                           }
                  },
                 {'type': 'message', 'data': 'table title2'},
                 {'type': 'table',
                  'data': {'headers': ['pk', 'name', 'status', 'stam'],
                           'rows': [{'pk': 1,
                                     'name': 'aa',
                                     'status': 'aamoshe',
                                     'stam': 'aastamv'
                                     },
                                    {'pk': 2,
                                     'name': 'bb_bla2',
                                     'status': 'bbmoshe2',
                                     'stam': 'bbstamv2'
                                     }, ]
                           }
                  },
                 {'type': 'message', 'data': 'table title3'},
                 {'type': 'table',
                  'data': {'headers': ['pk2', 'name2', 'status2', 'date'],
                           'rows': [{'pk2': 1,
                                     'name2': 'bla',
                                     'status3': 'moshe',
                                     'date': datetime.now()
                                     },
                                    {'pk2': 2,
                                     'name2': 'bla2',
                                     'status2': 'moshe2',
                                     'date': datetime.now()
                                     }, ]
                           }
                  },
                 ],
            'had_error': False,
            'response_type': 'some_type'
            }


@app.route('/base_information', methods=['POST', 'GET'])
def get_attr():
    print("hereeee")
    request_content = json.loads(request.data.decode()).get('content')
    print(request_content)
    id = request_content.get('info_id')
    posix = request_content.get('posix_location')
    print(id)
    print(posix)
    if request_content:
        return {'responses':
                    [{'type': 'message', 'data': 'returned 1 results'},
                     {'type': 'table',
                      'data': {'headers': ['key', 'value'],
                               'rows': [{'key': id,
                                         'value': 'tt',
                                         },
                                        {'key': posix,
                                         'value': 'aa2',
                                         },
                                        {'key': 'last_time',
                                         'value': datetime.now(),
                                         },
                                        {'key': 'battery',
                                         'value': '10',
                                         },
                                        {'key': 'session',
                                         'value': 'sssss',
                                         },
                                        {'key': 'version',
                                         'value': 'bbbbbb',
                                         },
                                        {'key': 'ppp',
                                         'value': 'qqq',
                                         },
                                        {'key': 'version2',
                                         'value': 'bbbbbbeeeeeeeeeeeeee',
                                         },
                                        {'key': 'ppp2',
                                         'value': 'qqq2',
                                         },
                                        {'key': 'ppp3',
                                         'value': 'qqq3',
                                         },
                                        {'key': 'ppp4',
                                         'value': 'qqq4',
                                         },
                                        {'key': 'ppp5',
                                         'value': 'qqq',
                                         },
                                        {'key': 'ppp6',
                                         'value': 'qqq',
                                         },
                                        ]
                               }
                      },

                     ],
                'had_error': False,
                'response_type': 'some_type'
                }


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
