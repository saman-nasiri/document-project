const roles = ['user', 'admin'];
const docsType = ['text', 'images', 'video'];

const scope = {
  // Admin Route Scope
  CU:       'create:user',
  SU:       'show:users',
  SUBI:     'show:user-by-id',

  CDF:       'create:documentFile',
  SDF:       'show:documentFiles',
  SDFBI:    'show:documentFile-by-id',
  EDF:      'edit:documentFile',  
  DDF:      'delete:documentFile',
  // App File Route Scope
  CAF:      'create:app-file',
  EAF:      'edit: app-file',
  UA:       'upload: apk',
  CNV:      'check: new-version',

  // Tutorial File Route Scope
  CTF:      'create: tutorial-file',
  UI:       'upload:image',
  UV:       'upload:video',
  UA:       'upload:audio',
  UD:       'upload:docs',
  PTF:      'paginate: tutorial-file',
  GTFD:     'get: tutorial-file-details',
  ETF:      'edit: tutorial-file',
  DTF:      'delete: tutorial-file'
};

const admin = [ scope.CU, scope.SU, scope.CDF, scope.SDF, scope.SDFBI, scope.EDF, scope.DDF ];
const user  = [ scope.SUBI, scope.CAF, scope.EAF, scope.UA ];

roleRights = (role) => {
  switch(role) {
    case 'admin':
      return admin.concat(user);

    case 'user':
      return user;
  }
};


module.exports = {
  scope,
  roles,
  docsType,
  roleRights,
};
